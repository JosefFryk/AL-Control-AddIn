function HeresSomeData(data){
    console.log(data);
    alert(data["Name"]);
}

function Draw(code)
{
    try {
        controlAddIn.innerHTML = "";
        var diagram = flowchart.parse(code);
        diagram.drawSVG('controlAddIn');
    } catch (error) {
        console.log(e);
    }
}

function Draw2(code) {
    try {
        const insertSvg = function (svgCode, bindFunctions){
            document.getElementById('controlAddIn').innerHTML = svgCode;
        };
        mermaid.mermaidAPI.render('chart', code, insertSvg);
    } catch (error) {
        
    }
}