builder.CreateFile("xlsx");
var oWorksheet = Api.GetSheet('Sheet1');
oWorksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
builder.SaveFile("xlsx", "GetSheet.xlsx");
builder.CloseFile();