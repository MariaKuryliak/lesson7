'use strict';
let getSell = s => document.querySelector(s);
let getSella = s => document.querySelectorAll(s);
let radio = document.getElementsByName('rb');

// Style Bottons
function styleBotton(id, color, shadow, colorOut) {
    getSell(id).onmouseover = function () {
        this.style.backgroundColor = color;
    }
    getSell(id).onmouseout = function () {
        this.style.backgroundColor = colorOut;
    }
    getSell(id).addEventListener('focus', function () {
        this.style.boxShadow = shadow;
    })
    getSell(id).addEventListener('blur', function () {
        this.style.boxShadow = 'none';
    })
}
styleBotton('#editBatton', '#dca800', '0px 0px 2px 1px rgba(255,204,0,1)', '#ffbc00');
styleBotton('#styleBatton', '#298397', '0px 0px 2px 1px rgba(32,178,214,1)', '#0e95b7');
styleBotton('#addBatton', '#bc2d30', '0px 0px 2px 1px rgba(228,69,64,1)', '#e44540');
styleBotton('#saveBatton', '#1d9446', '0px 0px 2px 1px rgba(29,148,70,1)', '#38a645');
styleBotton('#createTable', '#1d9446', '0px 0px 2px 1px rgba(29,148,70,1)', '#38a645');
styleBotton('#creteList', '#1d9446', '0px 0px 2px 1px rgba(29,148,70,1)', '#38a645');

//Botton Container
getSell('#editBatton').onclick = function () {
    getSell('#textArea').value = getSell('#topContainer').innerHTML;
    getSell('#bottomContainerEdit').style.display = 'block';
    getSell('#bottomContainerStyle').style.display = 'none';
}
//Botton style
getSell('#styleBatton').onclick = function () {
    getSell('#bottomContainerEdit').style.display = 'none';
    getSell('#bottomContainerStyle').style.display = 'flex';
    getSell('#inputBox').style.display = 'block';
}
//Botton save
getSell('#saveBatton').onclick = function () {
    getSell('#topContent').innerHTML = getSell('#textArea').value;
    getSell('#bottomContainerEdit').style.display = 'none';
}

//Font size
let fontSizes = document.forms['fontSizes'];
for (let i = 0; i < fontSizes.length; i++) {
    fontSizes.elements[i].addEventListener('click', function () {
        getSell('#topContainer').style.fontSize = this.value + 'px';
    });
}
//Font Family
let famely = document.forms['fameily'];
famely.selFamily.onchange = function () {
    for (let i = 0; i < famely.selFamily.children.length; i++) {
        if (famely.selFamily[i].selected) {
            getSell('#topContainer').style.fontFamily = this.value;
        }
    }
}

//Color box & bottons
let colorBox = getSell('.colorsTextBox');
let bg = getSell('.colorsBgBox');
let colorText = getSell('.textColors');
let colorBackgr = getSell('.backgrColors');

//div whit colors
let bottomsEvents = function (botton) {
    botton.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#5c626a'
    });
    botton.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#989797';
    })
    botton.addEventListener('focus', function () {
        this.style.boxShadow = ' 0px 0px 0px 2px rgba(173,177,183,1)'
    })
    botton.addEventListener('blur', function () {
        this.style.boxShadow = 'none';
    })
}
bottomsEvents(colorText);
bottomsEvents(colorBackgr);
let funColorText = function () {
    getSell('#topContainer').style.color = colorBox.children[i].firstElementChild.textContent;
}
//Color text
colorText.addEventListener('click', function () {
    bg.style.display = 'none';
    colorBox.style.display = 'flex';
    for (let i = 0; i < colorBox.children.length; i++) {
        colorBox.children[i].style.backgroundColor = colorBox.children[i].firstElementChild.textContent;
        colorBox.children[i].addEventListener('click', function () {
            getSell('#topContainer').style.color = colorBox.children[i].firstElementChild.textContent;
        })
    }
})
//Color background
colorBackgr.addEventListener('click', function () {
    colorBox.style.display = 'none';
    bg.style.display = 'flex';
    for (let i = 0; i < bg.children.length; i++) {
        bg.children[i].style.backgroundColor = bg.children[i].firstElementChild.textContent;
        bg.children[i].addEventListener('click', function () {
            getSell('#topContainer').style.backgroundColor = bg.children[i].firstElementChild.textContent;
        })
    }
})

//Bold text
let boldText = document.forms['check'];
bold.boldText.addEventListener('click', function () {
    if (this.checked) {
        getSell('#topContainer').style.fontWeight = '900';
    } else {
        getSell('#topContainer').style.fontWeight = '400';
    }
})

//Italic Text
let cursive = document.forms['cursive'];
cursive.cursiveText.addEventListener('click', function () {
    if (this.checked) {
        getSell('#topContainer').style.fontStyle = 'italic';
    } else {
        getSell('#topContainer').style.fontStyle = 'normal';
    }
})
//Botton "Add"
getSell('#addBatton').addEventListener('click', function () {
    getSell('#sectionListTable').style.display = 'block';
    for (let i = 0; i < getSella('.none').length; i++) {
        getSella('.none')[i].style.display = 'none';
    }
})

// Create table
getSell('#createTable').addEventListener('click', function () {
    //Create tr & td tags
    if (+getSell('#textInputTR').value != '' &&
        +getSell('#textInputTD').value != '' &&
        +getSell('#widthBorder').value != '' &&
        +getSell('#widthTd').value != '' &&
        +getSell('#heightTd').value != '') {
        let numTR = +getSell('#textInputTR').value;
        let numTD = +getSell('#textInputTD').value;
        let table = document.createElement('table');
        getSell('#tartar').appendChild(table);
        for (let i = 0; i < numTR; i++) {
            let tr = document.createElement('tr');
            getSell('#tartar>table').appendChild(tr);
            for (let j = 0; j < numTD; j++) {
                let td = document.createElement('td');
                getSella('tr')[i].append(td);
            }
        }
        for (let i = 0; i < getSella('td').length; i++) {
            getSella('td')[i].textContent = 'TD';
            //Table "td" border style
            let bordType = getSell('#selTypyBorder').value;
            let bordWidth = getSell('#widthBorder').value;
            let bordColor = getSell('#selColorBorder').value;
            getSella('td')[i].style.border = `${bordWidth}px ${bordType} ${bordColor} `;
            getSella('td')[i].style.width = getSell('#widthTd').value + `px`;
            getSella('td')[i].style.height = getSell('#heightTd').value + `px`;
        }
        for (let i = 0; i < getSella('.none').length; i++) {
            getSella('.none')[i].style.display = 'block';
        }
        getSell('#textArea').value += getSell('#tartar').innerHTML;
        getSell('#tartar').innerHTML = '';
        getSell('#bottomContainerStyle').style.display = 'none';
        //clear values
        getSell('#textInputTR').value = '';
        getSell('#textInputTD').value = '';
        getSell('#widthBorder').value = '';
        getSell('#widthTd').value = '';
        getSell('#heightTd').value = '';
        getSell('#selTypyBorder').value = getSell('#selTypyBorder').children[0].value;
        getSell('#selColorBorder').value = getSell('#selColorBorder').children[0].value;
        getSella('#tableOrList input')[0].checked = false;
        getSell('#tableDiv').style.display = 'none';
        getSell('#sectionListTable').style.display = 'none';
    }
})
//Create list
getSell('#creteList').addEventListener('click', function () {
    if (+getSell('#countLi').value != '') {
        let ul = document.createElement('ul');
        let numLi = +getSell('#countLi').value;
        getSell('#tartar').appendChild(ul);
        for (let i = 0; i < numLi; i++) {
            let newLi = document.createElement('li');
            getSell('ul').appendChild(newLi)
            getSella('li')[i].textContent = `items ${i+1}`;
        }
        getSell('ul').style.listStyle = getSell('#styleMarcs').value;
        getSell('ul').style.margin = '0 40px';
        //Section visable
        for (let i = 0; i < getSella('.none').length; i++) {
            getSella('.none')[i].style.display = 'block';
        }
        getSell('#textArea').value += getSell('#tartar').innerHTML;
        getSell('#tartar').innerHTML = '';
        getSell('#bottomContainerStyle').style.display = 'none';
        //clear all values
        getSell('#countLi').value = '';
        getSell('#styleMarcs').value = getSell('#styleMarcs').children[0].value;
        getSella('#tableOrList input')[1].checked = false;
        getSell('#createList').style.display = 'none';
        getSell('#sectionListTable').style.display = 'none';
    }
})

// Table Or List (Radio batton)
let tableOrList = document.forms['tableOrList']
tableOrList.addEventListener('change', function () {
    if (getSella('#tableOrList input')[0].checked) {
        getSell('#tableDiv').style.display = 'block';
        getSell('#createList').style.display = 'none';
    } else if (getSella('#tableOrList input')[1].checked) {
        getSell('#createList').style.display = 'block';
        getSell('#tableDiv').style.display = 'none';
    }
})