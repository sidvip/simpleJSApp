function showConfiureModal(ele) {
    let value = ele.classList[2];
    let boundingBox = ele.getBoundingClientRect();
    let top = boundingBox.top + boundingBox.height + 5;
    let left = boundingBox.left;

    let modalMain = document.getElementsByClassName('modal-main')[0];
    let addSwab = document.getElementsByClassName('add-swab')[0].classList;
    let removeSwab = document.getElementsByClassName('remove-swab')[0].classList;
    
    let addRinse = document.getElementsByClassName('add-rinse')[0].classList;
    let removeRinse = document.getElementsByClassName('remove-rinse')[0].classList;

    modalMain.innerHTML = '';
    let selectionValue = document.getElementsByClassName('select-class')[0].value;
    if (selectionValue === 'api' || selectionValue === 'clagent') {
        modalMain.innerHTML = modalTemp();
        modalMain.style.height = '300px';
    } else {
        modalMain.innerHTML = newModalTemp();
        modalMain.style.height = '200px';
    }
    if (value === 'swab' && addSwab.contains('hide-class')) {
        addSwab.remove('hide-class');
        removeSwab.add('hide-class');
        locatemodalTemplateLocation(top,left, 'hide-class');
    } else if (value === 'swab' && !addSwab.contains('hide-class')) {
        addSwab.add('hide-class');
        removeSwab.remove('hide-class');
        locatemodalTemplateLocation(top, left);
    } else if (value === 'rinse' && addRinse.contains('hide-class')) {
        addRinse.remove('hide-class');
        removeRinse.add('hide-class');
        locatemodalTemplateLocation(top,left, 'hide-class');
    } else {
        addRinse.add('hide-class');
        removeRinse.remove('hide-class');
        locatemodalTemplateLocation(top,left);
    }
}


function addMOC(ele) {
    ele.classList.add('hide-class');
    document.getElementsByClassName('add-moc')[0].classList.remove('hide-class');
}

function addEntry(ele) {
    let tableId = document.getElementById('entryTable');
    let row = tableId.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `<select class='modal-select'>
    <option value='sst'>Stainless Steel</option>
    <option value='sst'>Glass</option>
    <option value='sst'>Teflon</option>
    <option value='sst'>Plastic</option>
</select>`;
    cell2.innerHTML = `<input class="modal-input" type="number" min="0" style="width:50%">`;
}


function locatemodalTemplateLocation(top,left, className) {
    let modal = document.getElementsByClassName('modal-main')[0];
    if (className === undefined) {
        modal.classList.remove('hide-class');
        modal.style.top = top + 'px';
        modal.style.left = left + 'px';
    } else {
        modal.classList.add(className);
    }
}


function modalTemp() {
    return `
    <div class="modal-label"><sup class="superScript">*</sup>Method Used</div>
    <input class="modal-input" type="text">

    <table>
        <tr>
            <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Solvent Name</div></td>
            <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Solvent Quantity (ml)</div></td>
        </tr>
        <tr>
            <td><input class="modal-input" type="number" min="0" style="width:85%"></td>
            <td><input class="modal-input" type="number" min="0" style="width:85%"></td>
        </tr>
    </table>

    <div class="modal-label"><sup class="superScript">*</sup>Default Recovery (%)</div>
    <input class="modal-input" type="text">

    <button class='configure-modal-button' onclick='addMOC(this)' style="border: 1px solid skyblue;border-radius:5px;
    margin:10px;width: 90%;">
        <div class='add-rinse'><img class='icon-cls' src="./public/icons/add.png">
        Add MOC
    </button>

    <div class="add-moc hide-class">

        <div class="table-div">
            <table id='entryTable'>
                <tr>
                    <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Select MOC</div></td>
                    <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Recovery (%)</div></td>
                </tr>
                <tr>
                    <td><select class='modal-select'>
                        <option value='sst'>Stainless Steel</option>
                        <option value='sst'>Glass</option>
                        <option value='sst'>Teflon</option>
                        <option value='sst'>Plastic</option>
                    </select></td>
                    <td><input class="modal-input" type="number" min="0" style="width:50%"></td>
                </tr>

            </table>
        </div>
        
        <button class='configure-modal-button' onclick='addEntry(this)'>
            <img class='icon-cls' src="./public/icons/add.png"> Add another 
            <div style="color:black; display:inline-block; cursor:default;">or</div> Create a new MOC
        </button>
    </div>`;
}


function newModalTemp() {
    return `
    <table>
        <tr>
            <td><div class="modal-label" style='margin-left:0px;width: 120%;'><sup class="superScript">*</sup>Use Recovery for Swab?</div></td>
            <td><div class="modal-label" style='margin-left:10px;'><sup class="superScript">*</sup> Default Recovery (%)</div></td>
        </tr>
        <tr>
            <td>

            <input type="radio" name="checkIt">
            <div style="display:inline-block;font-size:14px;font-weight:bold;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Yes</div>

            <input type="radio" name="checkIt">
            <div style="display:inline-block;font-size:14px;font-weight:bold;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">No</div>

            </td>
            <td><input class="modal-input" type="number" min="0" style="width:85%;margin-left:10px;"></td>
        </tr>
    </table>

    <button class='configure-modal-button' onclick='addMOC(this)' style="border: 1px solid skyblue;border-radius:5px;
    margin:10px;width: 90%;">
        <div class='add-rinse'><img class='icon-cls' src="./public/icons/add.png">
        Add MOC
    </button>

    <div class="add-moc hide-class" style="height:50%;">

        <div class="table-div">
            <table id='entryTable'>
                <tr>
                    <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Select MOC</div></td>
                    <td><div class="modal-label" style='margin-left:0px;'><sup class="superScript">*</sup>Recovery (%)</div></td>
                </tr>
                <tr>
                    <td><select class='modal-select'>
                        <option value='sst'>Stainless Steel</option>
                        <option value='sst'>Glass</option>
                        <option value='sst'>Teflon</option>
                        <option value='sst'>Plastic</option>
                    </select></td>
                    <td><input class="modal-input" type="number" min="0" style="width:50%"></td>
                </tr>

            </table>
        </div>
        
        <button class='configure-modal-button' onclick='addEntry(this)'>
            <img class='icon-cls' src="./public/icons/add.png"> Add another 
            <div style="color:black; display:inline-block; cursor:default;">or</div> Create a new MOC
        </button>
    </div>`;
}