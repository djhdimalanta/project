document.getElementById('convertTempBtn').addEventListener('click', ()=> {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('temp-conversion').value;
    let result;
  
    if (isNaN(temperature)) {
      result = "Please enter a valid value.";
    } 

    switch (conversionType){
      case'celsius':
        result = (temperature - 32) * 5 / 9;
        document.getElementById('temp-result').innerText = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
      break;
      case 'fahrenheit':
        result = (temperature * 9 / 5) + 32;
        document.getElementById('temp-result').innerText = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
        break;
    }
  });
  

  document.getElementById('convertLengthBtn').addEventListener('click', ()=> {
    const length = parseFloat(document.getElementById('length').value);
    const conversionType = document.getElementById('length-conversion').value;
    let result;
  
    if (isNaN(length)) {
      result = "Please enter a valid value.";
    }

    switch (conversionType){
      case 'meters':
        result = (length * 0.3048);
        document.getElementById('length-result').innerText = `${length}feet is equal to ${result.toFixed(2)}m.`;
        break;
      case 'feet':
        result = (length * 3.28084);
        document.getElementById('length-result').innerText = `${length}m is equal to ${result.toFixed(2)}feet.`;
        break;
    }
  });