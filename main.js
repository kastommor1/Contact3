(function () {
    var doc = document;
    var addCont = doc.getElementById('add'),
        newContact = doc.getElementById('newContact'),
        modal = doc.getElementById("modal-win"),
        save = doc.getElementById('save'),
        saveCange = doc.getElementById('save_chan'),
        delCont= doc.getElementById('del'),
        findCont = doc.getElementById('find_inp'),
        addPhone = doc.getElementById('add-phone'),
        addEmail = doc.getElementById('add-email'),
        firstPhoneInp = doc.getElementById('phone0'),
        firstPhone = doc.getElementById('phone-warning'),
        firstEmailInp = doc.getElementById('email0'),
        firstEmail = doc.getElementById('email-warning'),
        nameWarning = doc.getElementById('name-warning'),
        lastNameWarning = doc.getElementById('lastname-warning'),
        name = doc.getElementById("name"),
        lastname = doc.getElementById("lastname");







    firstPhoneInp.oninput = function () {
        this.value = this.value.replace (/\D/, '') // Запрет ввода букв в первый  телефон
        if (firstPhone.value !== ''){ // Очистка предупреждения при заполнения телефона
            firstPhone.classList.add('switch');
            firstPhoneInp.classList.remove('alarm');
        }
    };






    // ____________INPUT WINDOW______________
    var newSwitch = function () {
        newContact.classList.toggle('switch'); //переключить
    };

    var newSwitchOn = function () {
        newContact.classList.remove('switch'); //переключить
    };

    var newSwitchOff = function () {
        newContact.classList.add('switch'); //переключить
    };

    var saveNew = function () {
        save.classList.remove('switch'); //переключить
        saveCange.classList.add('switch'); //переключить
        delCont.classList.add('switch'); //переключить
    };

    var saveOld = function () {
        save.classList.add('switch'); //переключить
        saveCange.classList.remove('switch'); //переключить
        delCont.classList.remove('switch'); //переключить
    };

    // ____________MODAL WINDOW______________
    var modalOn = function () {
        modal.classList.remove('switch');
    };

    var modalOff = function () {
        modal.classList.add('switch');
    };

    // ______________ADD & REMOVE  SECOND PHONE________________________
    // ____________________________________________________________________
    // ____________________________________________________________________


    var addNewPhone = function () {
        var inpSingleEmail = doc.getElementsByClassName('single-phone');
        var elem = doc.createElement("input");
        var elem1 = doc.createElement("button");
        var content1 = document.createTextNode('-');

        elem1.appendChild(content1);

        elem1.onclick = function () { //удаление секциии
            elem.remove();
            elem1.remove();
        }

        elem.oninput = function () {this.value = this.value.replace (/\D/, '')};


        elem.className = 'single-phone input_zone';
        elem1.className = 'remove-phone';


        elem.placeholder = 'Phone';
        var inputEmail = document.getElementById("inputPhone");
        inputEmail.appendChild(elem);
        inputEmail.appendChild(elem1);
    }

    addPhone.addEventListener('click', addNewPhone);


    var delNewPhone = function () {
        var inpSinglePhone = doc.getElementsByClassName('single-phone'),
            removePhone = doc.getElementsByClassName('remove-phone');

        if (inpSinglePhone.length > 1) {
            for (var i = inpSinglePhone.length -1; ; i--) {
                inpSinglePhone[i].remove();
                removePhone[i-1].remove();

                if ( i === 1){
                    break
                }
            }
        }
    }


    // ______________ADD & REMOVE  SECOND EMAIL________________________
    var emailValid = true; // Условие валидности
    var emailValidRe = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;   //регуляное виражения для проверки валидности мейла

    var addNewEmail = function () {
        var inpSingleEmail = doc.getElementsByClassName('single-email');
        var elem = doc.createElement("input");
        var elem1 = doc.createElement("button");
        var elem2 = doc.createElement("p");
        var content1 = document.createTextNode('-');
        var content2 = document.createTextNode('*in the format email@site.com');

        elem1.appendChild(content1);
        elem2.appendChild(content2);

        elem1.onclick = function () { //удаление секциии
            elem.remove();
            elem2.remove();
            elem1.remove();
        }

        elem.oninput = function () { // проверка валидации
            if (emailValidRe.test(elem.value) || elem.value == ""){ //сравнение строки и рег. виражения валидности имейла
                elem.classList.remove("alarm"); // добавление красного цвета инпута
                elem2.classList.add('switch'); // вивод сообщения
                emailValid = true;
            }
            else {
                elem.classList.add("alarm");
                elem2.classList.remove('switch');
                emailValid = false;
            }
            // console.log(emailValid);
        }


        elem.className = 'single-email input_zone';
        elem1.className = 'remove-email';
        elem2.className = 'warning-email switch';

        elem.placeholder = 'Email';
        var inputEmail = document.getElementById("inputEmail");
        inputEmail.appendChild(elem);
        inputEmail.appendChild(elem1);
        inputEmail.appendChild(elem2);
    }

    addEmail.addEventListener('click', addNewEmail);

    // ______________Валидация первого имейла_______________

    firstEmailInp.oninput = function () { // проверка валидации
        if (emailValidRe.test(firstEmailInp.value) || firstEmailInp.value == ""){ //сравнение строки и рег. виражения валидности имейла
            firstEmailInp.classList.remove("alarm"); // добавление красного цвета инпута
            firstEmail.classList.add('switch'); // вивод сообщения
            emailValid = true;
        }
        else {
            firstEmailInp.classList.add("alarm");
            firstEmail.classList.remove('switch');
            emailValid = false;
        }
        // console.log(emailValid);
    }



    var delNewEmail = function () {
        var inpSingleEmail = doc.getElementsByClassName('single-email'),
            warningEmail = doc.getElementsByClassName('warning-email'),
            removeEmail = doc.getElementsByClassName('remove-email');

        if (inpSingleEmail.length > 1) {
            for (var i = inpSingleEmail.length -1; ; i--) {
                inpSingleEmail[i].remove();
                warningEmail[i].remove();
                removeEmail[i-1].remove();

                if ( i === 1){
                    break
                }
            }
        }
    }

    // ________________ADD________________________
    var clearForms = function () {
        doc.getElementById("name").value = '';
        doc.getElementById("lastname").value = '';
        doc.getElementById("phone0").value = '';
        doc.getElementById("email0").value = '';
        firstEmailInp.classList.remove('alarm');
        firstEmail.classList.add('switch');

        delNewEmail();
        delNewPhone();
        findCont.value = '';

        //Очищаем предупреждение и красные окна имени и фамилии
        nameWarning.classList.add('switch');
        name.classList.remove('alarm');
        lastNameWarning.classList.add('switch');
        lastname.classList.remove('alarm');
        firstPhone.classList.add('switch');
        firstPhoneInp.classList.remove('alarm');
    };

    addCont.addEventListener('click', clearForms);
    addCont.addEventListener('click', newSwitchOn);
    addCont.addEventListener('click', saveNew);
    addCont.addEventListener('click', modalOn);


    //____________CONTACT LIST_______________
    //обернуть в функцию вызывать после сохранения

    var contList = function () {
        var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));

        if(arrFromStorage !== null){
            for (var i=0; i<arrFromStorage.length; i++){
                var elem = doc.createElement("div"),
                    ins = arrFromStorage[i],
                    namLast =  ins.name + ' ' +  ins.lastname,
                    content = document.createTextNode(namLast);
                // ins.id =  i; // ID-шник свойство
                elem.appendChild(content);
                elem.id = i; // ID-шник атрибут
                elem.className = 'single_contact';
                var conList = document.getElementById("contact_list");
                conList.appendChild(elem);
            }
        }
    };

    contList();


    var contListDel = function () {
        var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));
        // console.log(arrFromStorage);


        if(arrFromStorage !== null){
            // var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));
            for (var i=0; i<arrFromStorage.length; i++){

                var conList = document.getElementById("contact_list");
                var oldElem = doc.getElementById(i);
                if (oldElem !== null) {
                    conList.removeChild(oldElem);
                }
            }
        }
    };

    var contListRefr = function () {
        var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));
        console.log(arrFromStorage);


        if(arrFromStorage !== null){
            // var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));
            for (var i=0; i<arrFromStorage.length; i++){
                var elem = doc.createElement("div"),
                    ins = arrFromStorage[i],
                    namLast =  ins.name + ' ' +  ins.lastname,
                    content = document.createTextNode(namLast),
                    oldElem = doc.getElementById(i);

                elem.appendChild(content);
                elem.id = i; // ID-шник атрибут
                elem.className = 'single_contact';
                var conList = document.getElementById("contact_list");
                conList.removeChild(oldElem);
                conList.appendChild(elem);
                // conList.replaceChild(elem);
            }
        }
    };


    var lastcontList =  function () {
        var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));
        // console.log(arrFromStorage);
        // console.log(arrFromStorage.length-1);

        var elem = doc.createElement("div"),
            i = (arrFromStorage.length - 1),
            ins = arrFromStorage[i],
            namLast =  ins.name + ' ' +  ins.lastname,
            content = document.createTextNode(namLast);
        elem.appendChild(content);
        elem.id = i; // ID-шник атрибут
        elem.className = 'single_contact';
        var conList = document.getElementById("contact_list");
        conList.appendChild(elem);
    }

    addCont.addEventListener('click', contListDel);
    addCont.addEventListener('click', contList);



    // ____________VALID CLEAR NAME LASTNAME PHONE0 EMAIL0______________
    name.oninput = function () {
        if (name.value !== ''){
            nameWarning.classList.add('switch');
            name.classList.remove('alarm');
        }
    }
    lastname.oninput = function () {
        if (lastname.value !== ''){
            lastNameWarning.classList.add('switch');
            lastname.classList.remove('alarm');
        }
    }



    // ____________SAVE_____________________
    var saveContact = function () {
        var nameValue = name.value;
        var lastnameValue = lastname.value;

        // __Email arr_____
        var arrEmail = [];

        //Очищаем предупреждение и красные окна имени и фамилии
        nameWarning.classList.add('switch');
        name.classList.remove('alarm');
        lastNameWarning.classList.add('switch');
        lastname.classList.remove('alarm');
        firstPhone.classList.add('switch');
        firstPhoneInp.classList.remove('alarm');



        var inpSingleEmail = doc.getElementsByClassName('single-email');
        for (var i=0; i<inpSingleEmail.length; i++){
            if(inpSingleEmail[i].value !== ""){
                if (emailValidRe.test(inpSingleEmail[i].value)){ //сравнение строки и рег. виражения валидности имейла
                    arrEmail.push(inpSingleEmail[i].value);
                }
            }
        }


        // __phone arr_____
        var arrPhone = [];
        var inpSinglePhone = doc.getElementsByClassName('single-phone');
        for (var i=0; i<inpSinglePhone.length; i++){
            if(inpSinglePhone[i].value !== ""){
                arrPhone.push(inpSinglePhone[i].value);
            }
        }


        var tmparr = { name: nameValue,
            lastname: lastnameValue,
            phone: arrPhone,
            email: arrEmail
        };

        // console.log(tmparr);


        var emtyName = Boolean(nameValue);
        if (!emtyName){
            nameWarning.classList.remove('switch');
            name.classList.add('alarm')
        }

        var emtyLastName = Boolean(lastnameValue);
        if (!emtyLastName){
            lastNameWarning.classList.remove('switch');
            lastname.classList.add('alarm');
        }

        var emtyPhone = Boolean(firstPhoneInp.value);
        if (!emtyPhone){
            firstPhone.classList.remove('switch');
            firstPhoneInp.classList.add('alarm');
        }





        var arrContStor = JSON.parse(localStorage.getItem('arrContIn'));



        if(emtyName && emtyLastName && emtyPhone && emailValid){
            if(arrContStor === null){
                var arrCont = [];
                arrCont.push(tmparr);
                localStorage.setItem('arrContIn', JSON.stringify(arrCont));
                lastcontList();
            }
            else {
                arrContStor.push(tmparr);
                localStorage.setItem('arrContIn', JSON.stringify(arrContStor))
                lastcontList();
            }
            newSwitch();
            clearForms();
            modalOff();
        };
    };

    save.addEventListener('click', saveContact );


    // ______________SAVE CHANGE_________________________
    var saveContactChange = function () {
        var nameValue = name.value;
        var lastnameValue = lastname.value;

        // __Email arr_____
        var arrEmail = [];

        //Очищаем предупреждение и красные окна имени и фамилии
        nameWarning.classList.add('switch');
        name.classList.remove('alarm');
        lastNameWarning.classList.add('switch');
        lastname.classList.remove('alarm');
        firstPhone.classList.add('switch');
        firstPhoneInp.classList.remove('alarm');



        var inpSingleEmail = doc.getElementsByClassName('single-email');
        for (var i=0; i<inpSingleEmail.length; i++){
            if(inpSingleEmail[i].value !== ""){
                if (emailValidRe.test(inpSingleEmail[i].value)){ //сравнение строки и рег. виражения валидности имейла
                    arrEmail.push(inpSingleEmail[i].value);
                }
            }
        }


        // __phone arr_____
        var arrPhone = [];
        var inpSinglePhone = doc.getElementsByClassName('single-phone');
        for (var i=0; i<inpSinglePhone.length; i++){
            if(inpSinglePhone[i].value !== ""){
                arrPhone.push(inpSinglePhone[i].value);
            }
        }


        var tmparr = { name: nameValue,
            lastname: lastnameValue,
            phone: arrPhone,
            email: arrEmail
        };

        // console.log(tmparr);


        var emtyName = Boolean(nameValue);
        if (!emtyName){
            nameWarning.classList.remove('switch');
            name.classList.add('alarm')
        }

        var emtyLastName = Boolean(lastnameValue);
        if (!emtyLastName){
            lastNameWarning.classList.remove('switch');
            lastname.classList.add('alarm');
        }

        var emtyPhone = Boolean(firstPhoneInp.value);
        if (!emtyPhone){
            firstPhone.classList.remove('switch');
            firstPhoneInp.classList.add('alarm');
        }





        var arrContStor = JSON.parse(localStorage.getItem('arrContIn'));



        if(emtyName && emtyLastName && emtyPhone && emailValid){
            arrContStor[targetID] = tmparr;
            localStorage.setItem('arrContIn', JSON.stringify(arrContStor));

            newSwitch();
            clearForms();
            modalOff();
        }
    };

    saveCange.addEventListener('click', saveContactChange);




    // ____________CLOSE_____________________
    var close = doc.getElementById('close');
    close.addEventListener('click', clearForms);
    close.addEventListener('click', newSwitch);
    close.addEventListener('click', modalOff);
    close.addEventListener('click', contListDel);
    close.addEventListener('click', contList);

    // ____________CLOSE MODAL WINDOW______________

    var closeModal = function (event) {
        if (event.target == modal){
            modal.classList.add('switch'); //переключить
        }
    }

    window.addEventListener('click', closeModal);
    window.addEventListener('click', contListDel);
    window.addEventListener('click', contList);





    // ______________EXPAND________________________

    // Получим ID
    var contactListID = document.getElementById('contact_list');
    var expandCon = function (e) {
        clearForms();

        var e = e || event;
        var target = e.target || e.srcElement;
        targetID = target.id;
        // console.log(targetID);
        newContact.classList.remove('switch');
        var arrContStor = JSON.parse(localStorage.getItem('arrContIn'));
        var oneCont = arrContStor[targetID];

        doc.getElementById("name").value = oneCont.name;
        doc.getElementById("lastname").value = oneCont.lastname;

        // ___add phone from arr____

        if (oneCont.phone[0] !== undefined){
            doc.getElementById("phone0").value = oneCont.phone[0];
        }

        if (oneCont.phone.length > 1){
            (function () {
                for (var i = 1; i < oneCont.phone.length; i++ ){
                    var inpSingleEmail = doc.getElementsByClassName('single-phone');
                    var elem = doc.createElement("input");
                    var elem1 = doc.createElement("button");
                    var content1 = document.createTextNode('-');

                    elem1.appendChild(content1);

                    elem1.onclick = function () { //удаление секциии
                        elem.remove();
                        elem1.remove();
                    }

                    elem.oninput = function () {this.value = this.value.replace (/\D/, '')};


                    elem.className = 'single-phone input_zone';
                    elem1.className = 'remove-phone';


                    elem.placeholder = 'Phone';

                    elem.value = oneCont.phone[i];

                    var inputEmail = document.getElementById("inputPhone");
                    inputEmail.appendChild(elem);
                    inputEmail.appendChild(elem1);
                }
            })()
        }

        // ___add email from arr____

        if (oneCont.email[0] !== undefined){
            doc.getElementById("email0").value = oneCont.email[0];
        }

        if (oneCont.email.length > 1){
            for (var i = 1; i < oneCont.email.length; i++ ){
                var inpSingleEmail = doc.getElementsByClassName('single-email');

                var elem = doc.createElement("input");
                var elem1 = doc.createElement("button");
                var elem2 = doc.createElement("p");

                var content1 = document.createTextNode('-');
                var content2 = document.createTextNode('*in the format email@site.com');

                elem1.appendChild(content1);
                elem2.appendChild(content2);

                elem1.onclick = function () { //удаление секциии
                    elem.remove();
                    elem2.remove();
                    elem1.remove();
                }

                elem.oninput = function () { // проверка валидации
                    if (emailValidRe.test(elem.value) || elem.value == ""){ //сравнение строки и рег. виражения валидности имейла
                        elem.classList.remove("alarm"); // добавление красного цвета инпута
                        elem2.classList.add('switch'); // вивод сообщения
                        emailValid = true;
                    }
                    else {
                        elem.classList.add("alarm");
                        elem2.classList.remove('switch');
                        emailValid = false;
                    }
                }


                elem.className = 'single-email input_zone';
                elem1.className = 'remove-email';
                elem2.className = 'warning-email switch';

                elem.placeholder = 'Email';

                elem.value = oneCont.email[i];

                var inputEmail = document.getElementById("inputEmail");
                inputEmail.appendChild(elem);
                inputEmail.appendChild(elem1);
                inputEmail.appendChild(elem2);
            }
        }
    };

    contactListID .addEventListener('click', expandCon);
    contactListID .addEventListener('click', saveOld);
    contactListID .addEventListener('click', modalOn);


    // ______________DELETE________________________

    var delOldCont = function () {
        var arrContStor = JSON.parse(localStorage.getItem('arrContIn'));

        arrContStor.splice(targetID,1);
        localStorage.setItem('arrContIn', JSON.stringify(arrContStor));
        window.location.reload();
    };

    delCont.addEventListener('click', delOldCont);


    // ______________FIND________________________
    var findContList = function () {
        var arrFromStorage =  JSON.parse(localStorage.getItem('arrContIn'));

        if(arrFromStorage !== null){
            for (var i=0; i<arrFromStorage.length; i++){
                var ins = arrFromStorage[i],
                    insNameReg = ins.name.toUpperCase(), //Убираем учет регистра
                    insLastReg = ins.lastname.toUpperCase(), //Убираем учет регистра
                    findReg = findCont.value.toUpperCase(),//Убираем учет регистра
                    findRegLen = findReg.length,//Считаем длинну в инпуте
                    insNameLen = insNameReg.substring(0, findRegLen) ,//Берем первые 'х' - букв из имени
                    insLastLen = insLastReg.substring(0, findRegLen);//Берем первые 'х' - букв из фамилии

                // Теперь сравним по букве имена и фамили со строкой поиска без учета регистра
                if (findCont.value === ''){
                    contListDel();
                    contList();
                }
                else if ((insNameLen === findReg ) || (insLastLen === findReg ) ) {
                    var elem = doc.createElement("div"),
                        namLast =  ins.name + ' ' +  ins.lastname,
                        content = document.createTextNode(namLast);
                    elem.appendChild(content);
                    elem.id = i; // ID-шник атрибут
                    elem.className = 'single_contact';
                    var conList = document.getElementById("contact_list");
                    conList.appendChild(elem);
                }
            }
        }
    };
    findCont.addEventListener('click', newSwitchOff);
    findCont.addEventListener('click', clearForms);
    findCont.addEventListener('input', contListDel);
    findCont.addEventListener('input', findContList);












})()

