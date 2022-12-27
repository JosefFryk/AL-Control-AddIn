var controlAddIn = document.getElementById('controlAddIn');
controlAddIn.innerHTML = '<div style = "height: 100%; width: 100%; background-color: blue;"></div>';

var heightIndicator = window.parent.document.querySelector('div[class~="control-addin-form"]')
if (heightIndicator != null) {
    window.frameElement.style.height = heightIndicator.offsetHeight.toString() + "px";
    window.addEventListener(
        'resize', 
        function(event){
        window.frameElement.style.height = heightIndicator.offsetHeight.toString() + "px"},
        true
    )
}

parameter = {};
parameter['Name'] = 'JF';
parameter['Info'] = {'JF': 'Name'};

mermaid.initialize({startOnLoad: false});

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('ImAmReady', [parameter]);