import { endIndex, startIndex } from '@/Store/atom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useRecoilState } from 'recoil'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Example() {
  const [start, setStart]=useRecoilState(startIndex);
  const [end, setEnd]= useRecoilState(endIndex);
  return (
    <div className="flex items-center  justify-between bg-[#1f1f1f] px-4 py-3 sm:px-10">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
        onClick={()=>{
          start==1?setStart(1):setStart(start-8);
          end==8?setEnd(8):setEnd(end-8);
        }}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
        onClick={()=>{
          start==17?setStart(17):setStart(start+8);
          end==24?setEnd(24):setEnd(end+8);
        }}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={()=>{
                start==1?setStart(1):setStart(start-8);
                end==8?setEnd(8):setEnd(end-8);
              }}
              className="relative hover:text-black inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <button
              onClick={()=>{
                setEnd(8);
                setStart(1);
              }}
              aria-current="page"
              className="relative focus:bg-red-500 hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              1
            </button>
            <button
              onClick={()=>{
                setEnd(16);
                setStart(9);
              }}
              className="relative focus:bg-red-500 hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              2
            </button>
            <button
              onClick={()=>{
                setEnd(24);
                setStart(17);
              }}
              className="relative focus:bg-red-500 hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </button>
            <button
              onClick={()=>{
                start==17?setStart(17):setStart(start+8);
                end==24?setEnd(24):setEnd(end+8);
              }}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white hover:text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
