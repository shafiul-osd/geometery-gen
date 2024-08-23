//  triangle calculted area this is and we find to easy to this part

 function triangleCalculted (){
    const triangleBaseInput = document.getElementById('triangle-base');
    const innerValue = triangleBaseInput.value;
    const triangleBase = parseFloat(innerValue);
    
    
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightValue = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightValue)
    


        const area = 0.5 * triangleBase * triangleHeight;

        const triangleAreaShow = document.getElementById('triangle-area-show');
        triangleAreaShow.innerText = area;
}

// ratangle area calculted this part and we find to easy to this part



function ratangleCalculted(){
    const ratangleWidthInput = document.getElementById('ratangle-width')
    const ratangleWidthValue = ratangleWidthInput.value;
    const ratangleWidth = parseFloat(ratangleWidthValue);
    


    const ratangleLengthInput = document.getElementById('ratangle-length');
    const ratangleLengthValue = ratangleLengthInput.value;
    const ratangleLength = parseFloat(ratangleLengthValue);
    

    const area = ratangleWidth * ratangleLength;
    const ratangleAreaShow = document.getElementById('ratangle-area-show');
    ratangleAreaShow.innerText = area;

}

// parallegrom calculted part start here from and this is quit simple 

function parallelogramCalculted(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallegramBaseValue = parallelogramBaseInput.value;
    const parallegramBase = parseFloat(parallegramBaseValue);

    

    const parallegramHeightInput = document.getElementById('parallegrom-height');
    const parallegramHeightValue = parallegramHeightInput.value;
    const parallegramHeight = parseFloat(parallegramHeightValue);
    

    const area = parallegramBase * parallegramHeight;
    const parallegromAreaShow = document.getElementById('parallegrom-area-show')
    parallegromAreaShow.innerText = area;
}

// rombos calculted show this area and this is easy to find

function rombosCalculted(){
    const rombosd1Input = document.getElementById('rombos-d1');
    const rombosd1Value = rombosd1Input.value;
    const rombosd1 = parseFloat(rombosd1Value);


    const rombosd2Input = document.getElementById('rombos-d2');
    const rombosd2Value = rombosd2Input.value;
    const rombosd2 = parseFloat(rombosd2Value);
    
    const area =  0.5 * rombosd1 * rombosd2;
    
    const rombosAreaShow = document.getElementById('rombos-area-show');
    rombosAreaShow.innerText = area;

}

// pantagon calculted show this area and this is easy to find

function pantagonCalculted(){
    const pantagonInput = document.getElementById('pantagon-p');
    const pantagonValue = pantagonInput.value;
    const pantagon = parseFloat(pantagonValue);
    
    
    const pantagonB1Input = document.getElementById('pantagon-b');
    const pantagonB1Value = pantagonB1Input.value;
    const pantagonB1 = parseFloat(pantagonB1Value);
    

    const area = 0.5 * pantagon * pantagonB1;
    const pantagonAreaShow = document.getElementById('pantagon-area-show')
    pantagonAreaShow.innerText = area;

}

// ellipes calculted the area and this is fine to awsome and i relly like to find this one

function ellipesCalculted(){
    const ellipesA1Input = document.getElementById('ellipes-a');
    const ellipesA1Value = ellipesA1Input.value;
    const ellipesA1 = parseFloat(ellipesA1Value);
    

    const ellipesB1Input = document.getElementById('ellipes-b');
    const ellipesB1Value = ellipesB1Input.value;
    const ellipesB1 = parseFloat(ellipesB1Value);
    
    const area = 3.1416 * ellipesA1 * ellipesB1;

    const ellipesAreaShow = document.getElementById('ellipes-area-show')
    ellipesAreaShow.innerText = area;
}