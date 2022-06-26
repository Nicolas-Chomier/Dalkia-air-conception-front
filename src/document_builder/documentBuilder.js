import { Table, TableRow, TableCell, Paragraph, HeadingLevel } from "docx";

// Method where the docx content are made using Docx JS
function core(datas) {
  const core = [];
  const rows1 = [];
  const rows2 = [];
  const cp1 = datas[0];
  const cp2 = datas[1];
  // Document title
  core.push(
    new Paragraph({
      text: "Offre commerciale",
      heading: HeadingLevel.HEADING_1,
    })
  );
  // Document sub title CP1
  core.push(
    new Paragraph({
      text: "Essai Compresseur 1",
      heading: HeadingLevel.HEADING_2,
    })
  );
  // Compressor table 1 (rows)
  for (const [key, value] of Object.entries(cp1)) {
    rows1.push(
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(`${key}`)],
          }),
          new TableCell({
            children: [new Paragraph(`${value}`)],
          }),
        ],
      })
    );
  }
  // Compressor tables 1
  core.push(
    new Table({
      columnWidths: [3505, 5505],
      rows: rows1,
    })
  );
  // Document sub title CP2
  core.push(
    new Paragraph({
      text: "Essai Compresseur 2",
      heading: HeadingLevel.HEADING_2,
    })
  );
  // Compressor table 2 (rows)
  for (const [key, value] of Object.entries(cp2)) {
    rows2.push(
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(`${key}`)],
          }),
          new TableCell({
            children: [new Paragraph(`${value}`)],
          }),
        ],
      })
    );
  }
  // Compressor tables 2
  core.push(
    new Table({
      columnWidths: [3505, 5505],
      rows: rows2,
    })
  );
  return core;
}

// Methode wich store the final word document (commercial offer)
export function documents(datas) {
  //
  return core(datas);
}
