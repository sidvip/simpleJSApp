function addAPITemplate() {
    let htmlTemp = `
    <table>
        <tr>
            <td><div class="label-class sub-label-class"><sup class="superScript">*</sup>LOD (in ppm)</div></td>
            <td><div class="label-class sub-label-class"><sup class="superScript">*</sup>LOQ (in ppm)</div></td>
        </tr>
        <tr>
            <td><input class="input-common-class sub-input-class" type="number" min="0"></td>
            <td><input class="input-common-class sub-input-class" type="number" min="0"></td>
        </tr>
    </table>
    `;
    return htmlTemp;
}

function addBiodTemplate() {
    let htmlTemplate = `
    <div class="label-class marginal-class"><sup class="superScript">*</sup>Method Used</div>
    <input class="input-common-class marginal-class" type="text">
    
    <div class="label-class marginal-class" style="width:300px;"><sup class="superScript">*</sup>Define TNTC and TFTC Limits</div>

    <input type="radio" id="yes" name="selection" style="display:inline-block;width:16px;height:16px;" onchange="stateChange(this);" checked>
    <div style="display:inline-block; font-size:14px;font-weight:bold;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Yes</div>

    <input type="radio" id="no" name="selection" style= "display:inline-block;width:16px;height:16px;" onchange="stateChange(this);">
    <div style="display:inline-block;font-size:14px;font-weight:bold;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">No</div>

    <table class="limitsTable">
    <tr>
        <td><div class="label-class sub-label-class"><sup class="superScript">*</sup>TNTC Limit (in CFU)</div></td>
        <td><div class="label-class sub-label-class"><sup class="superScript">*</sup>TFTC Limit (in CFU)</div></td>
    </tr>
    <tr>
        <td><input id="tntc" class="input-common-class sub-input-class" type="number" min="0"></td>
        <td><input id="tftc" class="input-common-class sub-input-class" type="number" min="0"></td>
    </tr>
    </table>
    `;
    return htmlTemplate;
}

function stateChange(ele) {
    if (ele.id === 'yes') {
        document.getElementsByClassName('limitsTable')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('limitsTable')[0].style.display = 'none';
    }
}

function handleDropdown(ele) {
    let value = ele.value;
    let selectId = document.getElementById('select-data');
    let confButtonClassList = document.getElementsByClassName('conf-grp')[0].classList;
    document.getElementsByClassName('modal-main')[0].classList.add('hide-class');

    let confButtons = document.getElementsByClassName('configure-button-class');

    for (let button of confButtons) {
        for (let child of button.children) {
            if (child.classList[0].includes('add')) {
                child.classList.remove('hide-class');
            } else {
                child.classList.add('hide-class');
            }
        }
    }

    if (!confButtonClassList.contains('hide-class')) {
        confButtonClassList.add('hide-class');
    }
    selectId.innerHTML = '';
    if (value === 'api' || value === 'clagent') {
        selectId.innerHTML += addAPITemplate();
        confButtonClassList.remove('hide-class');
    } else {
        selectId.innerHTML += addBiodTemplate();
        confButtonClassList.remove('hide-class');
    }
}