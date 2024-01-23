import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      General: "Brand",
      Desc: "Dell",
    },
    {
        General: "Series",
        Desc: "G15",
    },
    {
        General: "Graphic Processor",
        Desc: "NVIDIA GeForce RTX 3050",
    },
    {
        General: "Processor",
        Desc: "Intel Core i5 12th gen",
    },
    {
        General: "Color",
        Desc: "Dark Shadow Grey",
    },
    {
        General: "Battery Backup",
        Desc: "Upto 10 Hours",
    },
    {
        General: "Dedicated Graphic Memory Type",
        Desc: "GDDR6",
    },
    {
        General: "RAM Type",
        Desc: "DDR5",
    }

  ]
  
  export function TableDemo() {
    return (
      <Table className="mb-10">
        <TableCaption>A list of Specification</TableCaption>
        <TableHeader className="text-lg ">
          <TableRow className="hover:bg-inherit">
            <TableHead className="text-white">General</TableHead>
            <TableHead className="text-center text-white">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody text-white>
          {invoices.map((invoice) => (
            <TableRow className="hover:bg-zinc-800" key={invoice.invoice}>
              <TableCell className="text-zinc-300 font-medium">{invoice.General}</TableCell>
              <TableCell className="text-zinc-300 text-center">{invoice.Desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  