page 84550 "SOLENEMyPage"
{
    Caption = 'Test';
    PageType = List;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = Customer;

    layout
    {

        area(Content)
        {
            grid(charts)
            {
                usercontrol(x; SOLENEtestaddin)
                {
                    ApplicationArea = all;
                    trigger ImAmReady(Parameters: JsonObject)
                    var
                        JsonTools: Codeunit "JSON Management";
                    begin
                        CurrPage.x.Draw2(TheCode);
                    end;
                }
                field(TheCode; TheCode)
                {
                    ApplicationArea = all;
                    MultiLine = true;
                    trigger OnValidate()
                    begin
                        CurrPage.x.Draw2(TheCode)
                    end;
                }
            }

        }
    }

    actions
    {

    }
    var
        TheCode: Text;
}