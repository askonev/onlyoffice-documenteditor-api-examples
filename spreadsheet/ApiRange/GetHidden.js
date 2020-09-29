builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Range = Worksheet.GetRange("A1:C1");
Range.SetHidden(true);
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.GetRange("C1").SetValue("3");
Worksheet.GetRange("A3").SetValue("The values in cells A1:C1 are hidden.");
var Hidden = Range.GetHidden();
Worksheet.GetRange("A4").SetValue("Hidden: " + Hidden);
builder.SaveFile("xlsx", "GetHidden.xlsx");
builder.CloseFile();