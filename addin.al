controladdin SOLENEtestaddin
{
    StartupScript = 'script.js';
    Scripts = 'script.js', 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.3.0/mermaid.min.js';
    HorizontalStretch = true;
    VerticalStretch = true;

    event ImAmReady(Parameters: JsonObject);

    procedure HeresSomeData(Data: JsonObject);

    procedure Draw2(Code: Text);

}