builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph, Run;
Paragraph = Document.GetElement(0);
Run = Api.CreateRun();
Run.AddText("This is a text run with the font color set to blue.");
Fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255));
Run.SetFill(Fill);
Paragraph.AddElement(Run);
builder.SaveFile("docx", "SetFill.docx");
builder.CloseFile();