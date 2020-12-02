const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const signOutBtn2 = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');
const storeDocumentCount = document.getElementById('storeDocumentCount')
const storeDocumentCount2 = document.getElementById('storeDocumentCount2')
const provider = new firebase.auth.GoogleAuthProvider();


//function side




/// Sign in event handlers

signInBtn.onclick = () => {
    auth.signInWithPopup(provider);

}

const headbar = document.getElementById('headbar')

signOutBtn.onclick = () => {
    studentLogin.hidden = true;
    facultyLogin.hidden = true;
    adminLogin.hidden = true
    headbar.hidden = true
    auth.signOut()

};

function showlist(list){
    for(i=0;i<list.length;i++){
    }
}

const getOutbtn = document.getElementById('getOutbtn')
getOutbtn.onclick= () =>{
    document.getElementById('studentLogin').hidden = true
    auth.signOut()


};

//headbar information
auth.onAuthStateChanged(user => {
    if (user) {
        // signed in

        headbar.hidden=false
        document.getElementById('userImg').src=user.photoURL;
        document.getElementById('username').innerHTML = user.displayName+'          '
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `${user.email}`;


    } else {
        // not signed in
        studentLogin.hidden = true;
        facultyLogin.hidden = true;
        adminLogin.hidden = true
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
        headbar.hidden = true


    }
});


const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');

const hoursinput = document.getElementById('hoursinput')
const activityinput = document.getElementById('activityinput')
const descriptioninput = document.getElementById('descriptioninput')

let thingsRef; //reference to a database location
let unsubscribe; // turn off realtime stream





const db = firebase.firestore()
management = db.collection('management')
const getAdmin = management.doc('admin').get()
const getfaculty = management.doc('faculty').get()
const getlist = db.collection('db').doc('list').get()


const studentLogin = document.getElementById('studentLogin')
const facultyLogin = document.getElementById('facultyLogin')
const adminLogin = document.getElementById('adminLogin')
const backstage = document.getElementById('backstage')
const tablehead = document.getElementById('tablehead')

//Access level
auth.onAuthStateChanged(function(user) {
    if (user) {
        getAdmin
            .then(doc =>{
                const adminlist = doc.data().admin;
                showlist(adminlist);
                if(adminlist.includes(user.email)){
                    //window.location.assign('../IG/Admin/AdminHomePage.html')
                    //document.getElementById('goAdmin').hidden = false;
                    adminLogin.hidden = false
                    facultyOverview.hidden = false
                }
                getfaculty
                    .then(doc =>{
                        const facultylist = doc.data().faculty;
                        showlist(facultylist);
                        if(facultylist.includes(user.email)){
                            //window.location.assign('../IG/Faculty/FacultyHomePage.html')
                            //document.getElementById('goFaculty').hidden = false;
                            facultyLogin.hidden = false;

                            facultyOverview.hidden = true

                        }
                        if(!adminlist.includes(user.email) && !facultylist.includes(user.email)){
                            //window.location.assign('../IG/Student/StudentHomePage.html')
                            //document.getElementById('goStudent').hidden = false;
                            studentLogin.hidden = false;

                            facultyOverview.hidden = true

                        }
                    })

            })

    } else {
        document.getElementById('goAdmin').hidden = true;
        document.getElementById('goFaculty').hidden = true;
        document.getElementById('goStudent').hidden = true;
        studentLogin.hidden = true;
        facultyLogin.hidden = true;
        adminLogin.hidden = true
        backstage.hidden = true;

        //document.getElementById('goAdmin').hidden = true;

    }
});

//A DataSnapshot contains data from a Database location.


const submit = document.getElementById('studentSubmit')
const datestudent = document.getElementById('datestudent')
const hoursInput = document.getElementById('hoursInput')
const description = document.getElementById('description')
const typeOfLearningHours = document.getElementById('typeOfLearningHours')
gain = document.getElementById('Gain')
valuethings = document.getElementById('Value')
explore = document.getElementById('Explore')
const eventHistory = document.getElementById('eventHistory')


testthis = document.getElementById('testthis')


function notempty(){
    return !(datestudent.value === '' ||
        // hoursinput.value===''||
        description.value === '' ||
        typeOfLearningHours.value === '' ||
        checkbox() === [] ||
        studentTextArea.value === '');
}
function whichempty(){
    datelabel = document.getElementById('datelabel')
    hoursinputlabel=document.getElementById('hoursinputlabel')
    switch(datestudent.value===''){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('balck')
            break
    }
    switch (hoursinput.value===''){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('balck')
            break
    }
    switch (description.value===''){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('balck')
            break
    }
    switch (typeOfLearningHours.value===''){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('balck')
            break
    }
    switch (checkbox()===[]){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('black')
            break
    }
    switch (studentTextArea.value===''){
        case true:
            datelabel.innerHTML.fontcolor('red')
            break
        case false:
            datelabel.innerHTML.fontcolor('black')
            break
    }

}
const studentTextArea = document.getElementById('studentTextArea')

function getToday(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}
function preset(){

    let descritionArray = [
        "Attendance at required events",
        "Drew Honduras Project(DHP)",
        "Drew Student Voter Project(DSVP)",
        "Changebuilder Program",
        "Project Pericles Debating for Democracy Team",
        "UPitch Business Development Team",
        "Federal Community Work Study",
        "Community-Based Learning Project or Placement",
        "Alternative Break Trip",
        "Lecture, Panel Discussion, Webinar, Screening, Performance",
        "Political Advocacy or Engagement",
        "Diversity, Inclusion/Anti-Racism Facilitated Dialogues and WorkShops",
        "Interfaith Training and Workshops(Center for Religion, Culture and Conflict)",
        "Participation in Student Government",
        "Other(add description below)"
    ]
    datestudent.value = getToday()
    hoursInput.value=Math.floor(Math.random() * 20)
    description.value = descritionArray[Math.floor(Math.random() * descritionArray.length)]
    typeOfLearningHours.value = ()=>{
        let a = ["Receptive","Active (preapproved)","Active (preapproved)","Receptive"]
        return a[Math.floor(Math.random() * 4)] //return a ramdon int from 0 to 3
    }
    studentTextArea.value=Math.random().toString(36).substring(7)

}
function needApproval(){
    //console.log(typeOfLearningHours.value)
    return typeOfLearningHours.value === "Active (preapproved)";

}
function getDate(){
    let d = new Date();
    let dd = d.getDate();
    let mm = d.getMonth();
    let yyyy = d.getFullYear()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    return yyyy+"-"+ mm+"-"+ dd+"-"+"     "+ hour+":"+min+":"+sec
}
function checkbox(){
    output = [];
    if(gain.checked === true){
        output.push(0)
    }
    if(valuethings.checked === true){
        output.push(1)
    }
    if(explore.checked === true){
        output.push(2)
    }
    return output;

}
function checkbox2(){
    output = [];
    if(Gainchange.checked === true){
        output.push(0)
    }
    if(Valuechange.checked === true){
        output.push(1)
    }
    if(Explorechange.checked === true){
        output.push(2)
    }
    return output;

}
function getFulfill(){
    var check=checkbox()
    let output=[]
    const list =[
        "Gain confidence and skills to identify, define and tackle complex problems that impact communities and transcend borders",
        "Value empathy, understanding and responsiveness to diverse others in their work and public roles.",
        "Explore and take action on solutions to real-world problems that fulfill the goals of social impact, financial viability, and environmental sustainability"
    ]
    for(i=0;i<check.length;i++){
        output.push(list[check[i]])
    }
    return output
}
function transferFulfill(array){
    let output=[]
    const list =[
        "Gain confidence and skills to identify, define and tackle complex problems that impact communities and transcend borders",
        "Value empathy, understanding and responsiveness to diverse others in their work and public roles.",
        "Explore and take action on solutions to real-world problems that fulfill the goals of social impact, financial viability, and environmental sustainability"
    ]
    for(i=0;i<array.length;i++){
        output.push(list[array[i]])
    }
    return output
}
function getCollectionLength(ref){
    ref.get().then(snap=>{
        console.log(snap.size)
    })
}


const studentUpdate =document.getElementById('studentUpdate')
const requiredbar = document.getElementById('requiredbar')
const activedbar = document.getElementById('activedbar')
const receptivebar = document.getElementById('receptivebar')
const overtime = document.getElementById('overtime')
const row1 =document.getElementById('row1')
const row2 =document.getElementById('row2')
const row3 =document.getElementById('row3')

const Allhistory =document.getElementById('Allhistory')
const approvedHistory =document.getElementById('approvedHistory')
const rejectedHistory =document.getElementById('rejectedHistory')
const pendingHistory =document.getElementById('pendingHistory')
const DefaultHistory =document.getElementById('DefaultHistory')
const studentdetails =document.getElementById('studentdetails')


const approvalH =document.getElementById('approvalH')
const rejectedH =document.getElementById('rejectedH')
const pendingH =document.getElementById('pendingH')
const defaultH =document.getElementById('defaultH')
const detailsH =document.getElementById('detailsH')
const submitUpdate =document.getElementById('submitUpdate')
const submitdelete =document.getElementById('submitdelete')
const Detailofstudent =document.getElementById('Detailofstudent')
function showAll(){
    eventHistory.hidden = false
    approvalH.hidden = true
    rejectedH.hidden = true
    pendingH.hidden = true
    defaultH.hidden = true
    detailsH.hidden =true

}
function showApproved(){
    eventHistory.hidden= true
    approvalH.hidden = false
    rejectedH.hidden = true
    pendingH.hidden = true
    defaultH.hidden = true
    detailsH.hidden =true

}
function showRejected(){
    eventHistory.hidden= true
    approvalH.hidden = true
    rejectedH.hidden = false
    pendingH.hidden = true
    defaultH.hidden = true
    detailsH.hidden =true

}
function showPending(){
    eventHistory.hidden= true
    approvalH.hidden = true
    rejectedH.hidden = true
    pendingH.hidden = false
    defaultH.hidden = true
    detailsH.hidden =true

}
function showDefault(){
    eventHistory.hidden = true
    approvalH.hidden = true
    rejectedH.hidden = true
    pendingH.hidden = true
    defaultH.hidden = false
    detailsH.hidden =true

}

function showDetail(){
    eventHistory.hidden = true
    approvalH.hidden = true
    rejectedH.hidden = true
    pendingH.hidden = true
    defaultH.hidden = true
    detailsH.hidden = false

}


//example
auth.onAuthStateChanged(user => {
    if (user) {
        // Database Reference
        thingsRef = db.collection('things')
        createThing.onclick = () => {
            const { serverTimestamp } = firebase.firestore.FieldValue;

            thingsRef.add({
                uid: user.uid,
                hours: hoursinput.value,
                activity: activityinput.value,
                description: descriptioninput.value,
                createdAt: serverTimestamp()
            });
            hoursinput.value = ''
            activityinput.value = ''
            descriptioninput.value = ''
        }
        ref = db.collection("student").doc(user.email.toString()).collection("record")

        testthis.onclick=()=>{
            const { serverTimestamp } = firebase.firestore.FieldValue;
            ref.add({
                uid: user.uid,
                date: 'datestudent.value',
                hours: 'hoursInput.value',
                descriptionofActivity: 'description.value',
                TypeOfLearningHours:'typeOfLearningHours.value',
                activityfullfilled:'checkbox()',
                Reflect:'studentTextArea.value',
                createdAt: serverTimestamp()
            });
        }

        // No Query
        unsubscribe = thingsRef
            .where('uid', '==', user.uid) //pull from collection
            .orderBy('createdAt') // Requires a query
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                const items = querySnapshot.docs.map( //querySnapshot是array中的一个 会一个个loop qss就是其中一个
                    function (doc) {
                        return `<li>${doc.data().hours}
                            ${doc.data().activity}
                            ${doc.data().description}</li>`
                    });
                thingsList.innerHTML = items.join('');

            });
    } else {
        // Unsubscribe when the user signs out
        unsubscribe && unsubscribe();
    }
});
function clearField(){
    typeOfLearningHours.value=''
    datestudent.value=null
    hoursInput.value=''
    description.value=''
    typeOfLearningHours.value=''
    gain.checked=false
    valuethings.checked=false
    explore.checked=false
    studentTextArea.value=''
    typeOfLearningHours.value=''
}
//Students
auth.onAuthStateChanged(user => {
    if(user){
        const collection = db.collection('STUDENT')

        const student_summary = db.collection('student_summary')

        const { serverTimestamp } = firebase.firestore.FieldValue;
        db.collection('student_summary')
            .doc(user.email)
            .get()
            .then(doc=>{
                selectMentor.value = doc.data().mentor
            })
        getAdmin
            .then(doc =>{
                const adminlist = doc.data().admin;
                getfaculty
                    .then(doc =>{
                        const facultylist = doc.data().faculty;
                        if(!adminlist.includes(user.email) && !facultylist.includes(user.email)){

                            student_summary.doc(user.email).get()
                                .then((docSnapshot) => {
                                    if (docSnapshot.exists) {
                                        student_summary.doc(user.email).onSnapshot((doc) => {
                                            console.log('exist')
                                            // do stuff with the data
                                        });
                                    }
                                    else{
                                        // create a document
                                        console.log('Not exist')

                                        student_summary.doc(user.email).set({
                                            'uid':user.uid,
                                            'Active':0,
                                            'Receptive':0,
                                            'Required':0,
                                            'summary': true,
                                            'useremail': user.email,
                                            'Summary_name': user.displayName,
                                            'lastUpload': getDate(),
                                            'mentor':""

                                        })
                                    }
                                });
                        }
                    })

            })


        db.collection('management')
            .doc('hourCap')
            .onSnapshot(management=>{
                let maxActive = management.data().Active
                let maxReceptive = management.data().Receptive
                let maxRequired = management.data().Required
                collection
                    .doc(user.email)
                    .onSnapshot(function(doc) {
                        collection
                            .where('uid','==',user.uid)
                            .where('TypeOfLearningHours','==','Active (not requiring preapproval)')
                            .onSnapshot(querySnapshot => {
                                // Map results to an array of li elements

                                const totalhours = querySnapshot.docs.map(
                                    doc => {
                                        return doc.data().hours
                                    });
                                let total = 0
                                for(i=0;i<totalhours.length;i++){
                                    total = totalhours[i] + total
                                }

                                activedbar.style.width =(total/maxActive)*100 +"%"
                                activedbar.innerHTML = Math.round((total/maxActive)*100) + "%"
                                student_summary.doc(user.email).update(
                                    {
                                        Active: total,
                                    }
                                )
                            });
                        collection
                            .where('uid','==',user.uid)
                            .where('stauts','==','Approved')
                            .where('TypeOfLearningHours','==','Active (preapproved)')
                            .onSnapshot(querySnapshot => {
                                // Map results to an array of li elements
                                const totalhours = querySnapshot.docs.map(
                                    doc => {
                                        return doc.data().hours
                                    });
                                let total = 0
                                for(i=0;i<totalhours.length;i++){
                                    total = totalhours[i] + total
                                }

                                requiredbar.style.width =(total/maxReceptive)*100 +"%"
                                requiredbar.innerHTML = Math.round((total/maxReceptive)*100) + "%"
                                student_summary.doc(user.email).update(
                                    {
                                        Required : total
                                    }
                                )
                            });
                        collection
                            .where('uid','==',user.uid)
                            .where('TypeOfLearningHours','==','Receptive')
                            .onSnapshot(querySnapshot => {
                                // Map results to an array of li elements
                                const totalhours = querySnapshot.docs.map(
                                    doc => {
                                        return doc.data().hours
                                    });
                                let total = 0
                                for(i=0;i<totalhours.length;i++){
                                    total = totalhours[i] + total
                                }
                                receptivebar.style.width = (total/maxRequired)*100 + "%"
                                receptivebar.innerHTML = Math.round((total/maxRequired)*100) + "%"
                                student_summary.doc(user.email).update(
                                    {
                                        Receptive: total
                                    }
                                )
                            });
                    })
            })


        db.collection('management')
            .doc('hourCap')
            .onSnapshot(management=>{
                let maxActive = management.data().Active
                let maxReceptive = management.data().Receptive
                let maxRequired = management.data().Required
                let maxmax = management.data().Active+management.data().Receptive+ management.data().Required
                student_summary
                    .doc(user.email)
                    .onSnapshot(
                        doc=>{
                            if((doc.data().Active + doc.data().Receptive + doc.data().Required)>maxmax){
                                row1.hidden = false
                                row2.hidden = false
                                row3.hidden = false
                            }
                            else{
                                row1.hidden = true
                                row2.hidden = true
                                row3.hidden = true
                            }
                        }
                    )
            })




        db.collection('management')
            .doc('hourCap')
            .onSnapshot(management=>{
                student_summary
                    .doc(user.email)
                    .onSnapshot(function(doc) {
                        document.getElementById('detailmentor').innerHTML = doc.data().mentor
                        document.getElementById('detailActive').innerHTML = doc.data().Active +'/'+ management.data().Active
                        document.getElementById('detailReceptive').innerHTML = doc.data().Receptive + '/'+management.data().Receptive
                        document.getElementById('detailRequired').innerHTML = doc.data().Required +'/'+ management.data().Required
                    })
                })


        function stauts(){
            if(needApproval()){
                return "Pending"
            }
            else{
                return 'Approved by default'
            }
        }

        submit.onclick=()=>{
            db.collection('student_summary')
                .doc(user.email)
                .update({
                'useremail': user.email,
                'Summary_name': user.displayName,
                'lastUpload': getDate()
            })



            collection.add({
                name:user.displayName,
                uid: user.uid,
                date: datestudent.value,
                hours: parseInt(hoursInput.value),
                descriptionofActivity: description.value,
                TypeOfLearningHours:typeOfLearningHours.value,
                activityfullfilled:checkbox(),
                Reflect:studentTextArea.value,
                needApproval:needApproval(),
                uploadTime:getDate(),
                createdAt: serverTimestamp(),
                email:user.email,
                mentor:selectMentor.value.trim(),
                stauts:stauts()
            })


            clearField()
            //getCollectionLength(collection)
        }
        submitUpdate.onclick=()=>{
            collection.doc(studentUpdate.value.trim()).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        if (docSnapshot.data().stauts!=="Approved"){
                            collection.doc(studentUpdate.value.trim()).update(
                                {
                                    name:user.displayName,
                                    uid: user.uid,
                                    date: datestudent.value,
                                    hours: parseInt(hoursInput.value),
                                    descriptionofActivity: description.value,
                                    TypeOfLearningHours:typeOfLearningHours.value,
                                    activityfullfilled:checkbox(),
                                    Reflect:studentTextArea.value,
                                    needApproval:needApproval(),
                                    uploadTime:getDate(),
                                    createdAt: serverTimestamp(),
                                    email:user.email,
                                    mentor:selectMentor.value.trim(),
                                    stauts:stauts()
                                }
                            )
                            console.log("UPDATE SUCCESS")
                        }
                        else{
                            alert("Event History does not exist or History can't be change by student, please contact faculty")
                        }
                        studentUpdate.value=''
                        clearField()
                    }
                    else {
                        alert("Event History does not exist or History can't be change by student, please contact faculty")
                        studentUpdate.value=''
                        clearField()
                    }

                });

        }
        submitdelete.onclick=()=>{
            collection.doc(studentUpdate.value.trim()).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        if (docSnapshot.data().stauts!=="Approved"){
                            collection.doc(studentUpdate.value.trim())
                                .delete()
                                .then(
                                    console.log(studentUpdate.value.trim()+"  deleted successfully")
                                )
                        }
                        else{
                            alert("Event History does not exist or History can't be change by student, please contact faculty")
                        }
                        studentUpdate.value=''
                    }
                    else {
                        alert("Event History does not exist")
                        studentUpdate.value=''
                    }

                });
        }



        Allhistory.onclick=()=>{
            console.log('Allhistory')
            showAll();
            console.log('Allhistory')
        }
        approvedHistory.onclick=()=>{
            console.log('approvedHistory')
            showApproved();
            console.log('approvedHistory')

        }
        rejectedHistory.onclick=()=>{
            console.log('rejectedHistory')
            showRejected();
            console.log('rejectedHistory')
        }
        pendingHistory.onclick=()=>{
            console.log('pendingHistory')
            showPending();
            console.log('pendingHistory')
        }
        DefaultHistory.onclick=()=>{
            console.log('defaultH')
            showDefault();
            console.log('defaultH')
        }
        studentdetails.onclick=()=>{
            console.log('Detail')
            showDetail();
            console.log('Detail')
        }

        //Event history of student
        unsubscribe = collection
            .where('uid','==',user.uid)
            //.orderBy("createdAt", "desc")// Requires a query
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                //student history
                const history = querySnapshot.docs.map(
                    doc => {
                        //console.log(doc.id) 这是成功的
                        return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                   
                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                            <script>
                            
                                // const head = document.getElementById('${doc.id}')
                                // console.log(head.id);
                                // if(doc.data().stauts === "Approved by default" ||doc.data().stauts === "Approved" ){
                                //     head.innerHTML ='<span class="layui-badge layui-bg-green" style="float: right;margin: 5px">Approved</span>'
                                // }
                                // else if(doc.data().stauts === "Pending"){
                                //     head.innerHTML ='<span class="layui-badge layui-bg-orange" style="float: right;margin: 5px">Pending</span>'
                                // }
                                // if(doc.data().stauts === "Rejected"){
                                //     head.innerHTML ='<span class="layui-badge" style="float: right;margin: 5px">Rejected</span>'
                                // }
                            </script>`
                    }
                    );
                eventHistory.innerHTML = history.join('');

            })
            //.orderBy("createdAt", "desc")
    }
    else{
        unsubscribe && unsubscribe();

    }
})
//each tap for student
auth.onAuthStateChanged(user =>{
    if(user){
        collection = db.collection('STUDENT')
        unsubscribe = collection //Approved
            .where('uid','==',user.uid)
            .where('stauts','==','Approved')
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                //student history

                const history1 = querySnapshot.docs.map(
                    doc => {
                        return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                   
                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                    }
                );
                approvalH.innerHTML = history1.join('')

            })
            //.orderBy("createdAt", "desc");

    }
    else{
        unsubscribe && unsubscribe();

    }
})
auth.onAuthStateChanged(user =>{
    if(user){
        const collection = db.collection('STUDENT')

        unsubscribe  = collection //Rejected
            .where('uid','==',user.uid)
            .where('stauts','==','Rejected')
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                //student history
                const history2 = querySnapshot.docs.map(
                    doc => {
                        //console.log(doc.id) 这是成功的
                        return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>

                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>

                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                    }
                );
                rejectedH.innerHTML = history2.join('')

            })
            //.orderBy("createdAt", "desc");


    }
    else{
        unsubscribe && unsubscribe();

    }
})
auth.onAuthStateChanged(user =>{
    if(user){
        const collection = db.collection('STUDENT')

        unsubscribe = collection //Pending
            .where('uid','==',user.uid)
            .where('stauts','==','Pending')
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                //student history

                const history3 = querySnapshot.docs.map(
                    doc => {
                        //console.log(doc.id) 这是成功的
                        return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>

                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>

                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                    }
                );
                pendingH.innerHTML = history3.join('')

            })
            //.orderBy("createdAt", "desc");

    }
    else{
        unsubscribe && unsubscribe();

    }
})
auth.onAuthStateChanged(user =>{
    if(user){
        const collection = db.collection('STUDENT')


        unsubscribe = collection //default
            .where('uid','==',user.uid)
            .where('stauts','==','Approved by default')
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                //student history

                const history4 = querySnapshot.docs.map(
                    doc => {
                        //console.log(doc.id) 这是成功的
                        return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>

                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>

                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                    }
                );
                defaultH.innerHTML = history4.join('')

            })
        //.orderBy("createdAt", "desc");

    }
    else{
        unsubscribe && unsubscribe();

    }
})

const listOfstudent =document.getElementById('listOfstudent')
const facultyStudent =document.getElementById('facultyStudent')
const selectMentor = document.getElementById('selectMentor')

const rejectbtn = document.getElementById('rejectbtn')
const approvebtn = document.getElementById('approvebtn')
const clearbtn = document.getElementById('clearbtn')
const uidinput = document.getElementById('uidinput')
const facultyStudentTable = document.getElementById('facultyStudentTable')
const studentOverviewBtn = document.getElementById('studentOverviewBtn')
const studentOverviewBtn2 = document.getElementById('studentOverviewBtn2')
const changeStudentEvent = document.getElementById('changeStudentEvent')

const changestudentdata = document.getElementById('changestudentdata')

const approveArea = document.getElementById('approveArea')
const studentlistArea = document.getElementById('studentlistArea')
const facultybtnhidden = document.getElementById('facultybtnhidden')
const facultyInfochange = document.getElementById('facultyInfochange')
const studentdetail = document.getElementById('studentdetail')
//change in the faculty
const datestudentChange = document.getElementById('datestudentChange')
const hoursInputChange = document.getElementById('hoursInputChange')
const selectMentorChange = document.getElementById('selectMentorChange')
const descriptionchange = document.getElementById('descriptionchange')
const typeOfLearningHoursChange = document.getElementById('typeOfLearningHoursChange')
const Gainchange = document.getElementById('Gainchange')
const Valuechange = document.getElementById('Valuechange')
const Explorechange = document.getElementById('Explorechange')
const studentTextAreaChange = document.getElementById('studentTextAreaChange')
const studentSubmitchange = document.getElementById('studentSubmitchange')

const facultyDeletebtn = document.getElementById('facultyDeletebtn')
const facultyuidinput = document.getElementById('facultyuidinput')
const pull = document.getElementById('pull')
const facultyChangeSubmit = document.getElementById('facultyChangeSubmit')
const facultystauts = document.getElementById('facultystauts')
const cleanSubmit = document.getElementById('cleanSubmit')
const checkEachStudent = document.getElementById('checkEachStudent')
const facultyStudentOverviewTable = document.getElementById('facultyStudentOverviewTable')

const indivualStudentWholeHistoryTap = document.getElementById('indivualStudentWholeHistoryTap')
const uidForStudentHistory = document.getElementById('uidForStudentHistory')
const getStudentAllHistory = document.getElementById('getStudentAllHistory')
const thatStudentHistoryList = document.getElementById('thatStudentHistoryList')
const eventChangeRightTap = document.getElementById('eventChangeRightTap')
const eventChangeRightSide = document.getElementById('eventChangeRightSide')


function facultyCheck(){
    output = [];
    if(Gainchange.checked === true){
        output.push(0)
    }
    if(Valuechange.checked === true){
        output.push(1)
    }
    if(Explorechange.checked === true){
        output.push(2)
    }
    return output;

}
function getFulfillfaculty(){
    var check=facultyCheck()
    let output=[]
    const list =[
        "Gain confidence and skills to identify, define and tackle complex problems that impact communities and transcend borders",
        "Value empathy, understanding and responsiveness to diverse others in their work and public roles.",
        "Explore and take action on solutions to real-world problems that fulfill the goals of social impact, financial viability, and environmental sustainability"
    ]
    for(i=0;i<check.length;i++){
        output.push(list[check[i]])
    }
    return output
}
function facultyclean(){
    datestudentChange.value = ''
    hoursInputChange.value =''
    selectMentorChange.value =''
    descriptionchange.value = ''
    typeOfLearningHoursChange.value = ''
    Gainchange.checked = false
    Valuechange.checked = false
    Explorechange.checked = false
    studentTextAreaChange.value = ''
    facultystauts.value = ''
}
function passIdtoField(ids){
    console.log(ids)
    uidinput.value = ids
}



function passIdtoFieldForstudentDetail(name){
    console.log(name)

    uidForStudentHistory.value = name
    db.collection('STUDENT')
        .where('name','==',name)
        .get()
        .then(snap=>{
            const history = snap.docs.map(
                doc => {
                    return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                   
                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                }
            )
            thatStudentHistoryList.innerHTML = history.join('');
        })
}

function inputUID(uid){
    facultyuidinput.value = uid
    facultyclean()
    db.collection('STUDENT').doc(uid)
        .get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                db.collection('STUDENT').doc(uid)
                    .get()
                    .then(
                        doc=>{
                            console.log("pull")
                            datestudentChange.value = doc.data().date
                            hoursInputChange.value = doc.data().hours
                            selectMentorChange.value = doc.data().mentor
                            descriptionchange.value = doc.data().descriptionofActivity
                            typeOfLearningHoursChange.value = doc.data().TypeOfLearningHours
                            facultystauts.value = doc.data().stauts
                            if(doc.data().activityfullfilled.includes(0)){
                                Gainchange.checked = true
                            }
                            if(doc.data().activityfullfilled.includes(1)){
                                Valuechange.checked = true
                            }
                            if(doc.data().activityfullfilled.includes(2)){
                                Explorechange.checked = true
                            }
                            studentTextAreaChange.value = doc.data().Reflect
                        }
                    )

            }
            else {
                alert(uid+" does not exist")
                console.log(uid+" does not exist")
            }
            console.log("pull")
        });
}
function pullOutAlistOfEvent(name,ref){
    db.collection('STUDENT')
        .where('name','==',name)
        .get()
        .then(snap=>{
            const history = snap.docs.map(
                doc => {
                    return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 10px;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px" onclick="inputUID('${doc.id}')">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3"><a onclick="inputUID('${doc.id}')">${doc.data().name}</a></div>
                                            <div class="layui-col-md7">${doc.data().stauts}</div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>               
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                }
            )
            ref.innerHTML = history.join('');
        })
}
//faculty
auth.onAuthStateChanged(user =>{
    if(user){
        const STUDENT = db.collection('STUDENT')
        const student_summary = db.collection('student_summary')
        unsubscribe = student_summary
            .where('mentor','==',user.email)
            .onSnapshot(querySnapshot => {
                const history = querySnapshot.docs.map(
                    doc => {
                        console.log(doc.data().name+doc.data().Active+doc.data().Receptive+doc.data().Required)
                        return `
                         <div class="">
                            <div style="padding: 0px 15px 0px 15px;; background-color: #F2F2F2;">
                                <div class="layui-row layui-col-space6">
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Summary_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Active} hours
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Receptive} hours
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Required} hours
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    });
                document.getElementById('facultyStudentTable2').innerHTML = history.join('');
            })

        unsubscribe = student_summary
            .where('mentor','==',user.email)
            .onSnapshot(querySnapshot => {
                const history = querySnapshot.docs.map(
                    doc => {
                        return `
                         <div class="">
                            <div style="padding: 2px 5px 2px 5px; background-color: #F2F2F2;">
                                <div class="layui-row layui-col-space6">
                                    <div>
                                        <a class="layui-card" >
                                            <div class="layui-card-body" onclick="pullOutAlistOfEvent('${doc.data().Summary_name}',eventChangeRightTap)">
                                            <a style="cursor: pointer" onclick="pullOutAlistOfEvent('${doc.data().Summary_name}',eventChangeRightTap)">${doc.data().Summary_name}</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `

                    });
                eventChangeRightSide.innerHTML = history.join('')

            })
        //overview in the faculty
        unsubscribe = student_summary
            .where('mentor','==',user.email)
            .onSnapshot(querySnapshot => {
                const history = querySnapshot.docs.map(
                    doc => {
                        console.log(doc.data().name+doc.data().Active+doc.data().Receptive+doc.data().Required)
                        return `
                         <div class="">
                            <div style="padding: 0px 5px 0px 5px;; background-color: #F2F2F2;">
                                <div class="layui-row layui-col-space6">
                                    <div class="layui-col-md12">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                            <div class="layui-row">
                                            <button class='layui-btn layui-btn-primary layui-btn-fluid'
                                            onclick="passIdtoFieldForstudentDetail('${doc.data().Summary_name}')">
                                                ${doc.data().Summary_name}
                                            </button>
                                            </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `

                    });
                facultyStudentOverviewTable.innerHTML = history.join('');
            })
    }
    else{
        unsubscribe && unsubscribe();
    }
})
auth.onAuthStateChanged(user =>{
    if(user){

        const STUDENT = db.collection('STUDENT')
        clearbtn.onclick=()=>{
            uidinput.value = ''
        }
        rejectbtn.onclick=()=>{
            STUDENT.doc(uidinput.value.trim()).update(
                {
                    stauts:'Rejected'
                }
            )
                .then(function() {
                console.log("Document successfully updated!");
            })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            uidinput.value = ''
        }
        approvebtn.onclick=()=>{
            STUDENT.doc(uidinput.value.trim()).update(
                {
                    stauts:'Approved'
                }
            )
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            uidinput.value = ''

        }

        //studentlistArea.classList.toggle('hide')
        //approveArea.classList.toggle('hide')
        var num = 0
        studentOverviewBtn.onclick=()=>{
            indivualStudentWholeHistoryTap.hidden = true
            studentdetail.hidden = true
            studentlistArea.hidden = true
            changestudentdata.hidden = true
            facultyInfochange.hidden = true
            approveArea.hidden = false
            facultybtnhidden.hidden = false
        }
        studentOverviewBtn2.onclick=()=>{
            indivualStudentWholeHistoryTap.hidden = true
            studentdetail.hidden = true
            approveArea.hidden = true
            facultybtnhidden.hidden = true
            changestudentdata.hidden = true
            facultyInfochange.hidden = true
            studentlistArea.hidden = false
        }
        changeStudentEvent.onclick=()=>{
            indivualStudentWholeHistoryTap.hidden = true
            studentdetail.hidden = true
            approveArea.hidden = true
            studentlistArea.hidden = true
            facultybtnhidden.hidden = true
            facultyInfochange.hidden = false
            changestudentdata.hidden = false

        }
        checkEachStudent.onclick=()=>{
            approveArea.hidden = true
            studentlistArea.hidden = true
            facultybtnhidden.hidden = true
            facultyInfochange.hidden = true
            changestudentdata.hidden = true
            indivualStudentWholeHistoryTap.hidden = false
            studentdetail.hidden = false
        }
        facultyDeletebtn.onclick=()=>{
            const documentid = facultyuidinput.value.trim()
            STUDENT.doc(documentid).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        STUDENT.doc(documentid)
                            .delete()
                            .then(()=>{
                                alert(documentid+' deleted')
                                console.log(documentid+' deleted')
                            })
                    }
                    else {
                        alert(documentid+" does not exist")
                        console.log(documentid+" does not exist")
                    }
                });
            facultyuidinput.value = ''

        }
        pull.onclick=()=>{
            facultyclean()
            const documentid = facultyuidinput.value.trim()

            STUDENT.doc(documentid).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        STUDENT.doc(documentid)
                            .get()
                            .then(
                                doc=>{
                                    console.log("pull")
                                    datestudentChange.value = doc.data().date
                                    hoursInputChange.value = doc.data().hours
                                    selectMentorChange.value = doc.data().mentor
                                    descriptionchange.value = doc.data().descriptionofActivity
                                    typeOfLearningHoursChange.value = doc.data().TypeOfLearningHours
                                    facultystauts.value = doc.data().stauts
                                    if(doc.data().activityfullfilled.includes(0)){
                                        Gainchange.checked = true
                                    }
                                    if(doc.data().activityfullfilled.includes(1)){
                                        Valuechange.checked = true
                                    }
                                    if(doc.data().activityfullfilled.includes(2)){
                                        Explorechange.checked = true
                                    }
                                    studentTextAreaChange.value = doc.data().Reflect
                                }
                            )

                    }
                    else {
                        alert(documentid+" does not exist")
                        console.log(documentid+" does not exist")
                    }
                    console.log("pull")
                });
        }
        facultyChangeSubmit.onclick=()=>{
            const documentid = facultyuidinput.value.trim()
            collection.doc(documentid).get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        console.log("change sumbit")
                        collection.doc(documentid).update(
                            {
                                date: datestudentChange.value,
                                hours: parseInt(hoursInputChange.value),
                                mentor: selectMentorChange.value,
                                descriptionofActivity: descriptionchange.value,
                                TypeOfLearningHours: typeOfLearningHoursChange.value,
                                activityfullfilled:checkbox2(),
                                Reflect:studentTextAreaChange.value
                            }
                        )
                        alert("Change Success")
                    }
                    else {
                        alert("The event does not exist")
                    }

                });
        }
        cleanSubmit.onclick=()=>{
            facultyclean()
        }

        getStudentAllHistory.onclick=()=>{
            const studentUID = uidForStudentHistory.value.trim()
            STUDENT
                .where('name','==',studentUID)
                .where('mentor','==',user.email)
                .get()
                .then(snap=>{
                    const history = snap.docs.map(
                        doc => {
                            return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4">${doc.id}</div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                   
                                                Fullfill:  ${getFulfill()}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                        }
                    )
                    thatStudentHistoryList.innerHTML = history.join('');
                })

        }

        unsubscribe = STUDENT
            .where('mentor','==',user.email)
            .where('needApproval','==',true)
            .where('stauts','==',"Pending")
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                const history = querySnapshot.docs.map(
                    doc => {
                        return `<li class = "layui-timeline-item"> 
                            <i class = "layui-icon layui-timeline-axis"></i>
                            <div class="layui-timeline-content layui-text">
                                <section class="layui-timeline-title">upload At ${doc.data().uploadTime}  <h6 style="float: right;color: #0d9800">${doc.data().stauts}</h6></section>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-row layui-colla-title layui-col-md12">
                                            <div class="layui-col-md3"> <a style="width: 100%" class="layui-btn layui-btn-primary" onclick="passIdtoField('${doc.id}')">${doc.data().name}</a></div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md3"></div>                                         
                                        </div>
                                        <div class="layui-colla-content layui-show">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: red">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        `
                    });
                approvePlace.innerHTML = history.join('');

            })

    }
    else{
        unsubscribe && unsubscribe();
    }
})

const table = document.getElementById('table')
const activeOrder = document.getElementById('activeOrder')
const requiredOrder = document.getElementById('requiredOrder')
const receptiveOrder = document.getElementById('receptiveOrder')
const nameOrder = document.getElementById('nameOrder')
const overviewOfStudent = document.getElementById('overviewOfStudent')
const facultyOverview = document.getElementById('facultyOverview')
const showfacultyBtn = document.getElementById('showfacultyBtn')
const showStudentBtn = document.getElementById('showStudentBtn')
const facultyTap = document.getElementById('facultyTap')
const changeMaxHour = document.getElementById('changeMaxHour')

const AdminChangeHourAcive = document.getElementById('AdminChangeHourAcive')
const AdminChangeHourReceptive = document.getElementById('AdminChangeHourReceptive')
const AdminChangeHourRequired = document.getElementById('AdminChangeHourRequired')
const submitChangehourBTN = document.getElementById('submitChangehourBTN')

const adminEmailField = document.getElementById('adminEmailField')
const studentEmailField = document.getElementById('studentEmailField')
const facultyEmailField = document.getElementById('facultyEmailField')

const addAdminBTN = document.getElementById('addAdminBTN')
const deleteAdminBTN = document.getElementById('deleteAdminBTN')
const AssignBTN = document.getElementById('AssignBTN')
const RemoveBTN = document.getElementById('RemoveBTN')
const ClearAssignRemoveBTN = document.getElementById('ClearAssignRemoveBTN')
const addfacultyBTN = document.getElementById('addfacultyBTN')
const deletefacultyBTN = document.getElementById('deletefacultyBTN')
const facultyCard = document.getElementById('facultyCard')
const managementAdminSidebar = document.getElementById('managementAdminSidebar')

function givebackHTML(list){
    const back = list.map(
        doc=>{
            return `<div><a onclick="setStudentEmailField('${doc}')">${doc}</a></div>`
        }
    )
    return back.join('')
}
function setAdminEmailField(email){
    adminEmailField.value = email
}

function setStudentEmailField(email){
    studentEmailField.value = email
}
function setFacultyEmailField(email){
    facultyEmailField.value = email
}
function addItemToArray(string){
    return firebase.firestore.FieldValue.arrayUnion(string)
}
function removeItem(string){
    return firebase.firestore.FieldValue.arrayRemove(string)
}
function getStudentAll(name){
    const STUDENT = db.collection('STUDENT')
    STUDENT
        .where('email','==',name)
        .get()
        .then(snap=>{
            const history = snap.docs.map(
                doc => {
                    return `<li class = "layui-timeline-item animate__animated animate__fadeIn hoverover " style="padding-left: 2rem;border-radius: 15px">
                            <div class="layui-timeline-content layui-text" style="border-radius: 15px">
                                <div class="layui-timeline-title layui-row">
                                        <div class="">
                                              <h3 class="layui-timeline-title">${doc.data().uploadTime}</h3>
                                        </div>                                        
                                </div>
                                <div class="layui-collapse">
                                    <div class="layui-colla-item">
                                        <div class="layui-colla-title layui-row">
                                            <div class="layui-col-md3"></div>
                                            <div class="layui-col-md3">${doc.data().stauts}</div>
                                            <div class="layui-col-md2"></div>
                                            <div class="layui-col-md4"></div>
                                        </div>
                                        
                                        <div class="layui-show" style="padding: 1rem">
                                            <p>
                                                Date on: ${doc.data().date}
                                                <p style="font-size:140% ; border-radius: 10px ">Hours:${doc.data().hours}</p><br>
                                                Description of Activity:   ${doc.data().descriptionofActivity}<br>
                                                Type Of LearningHours:   ${doc.data().TypeOfLearningHours}<br>
                                                Fullfill:  ${transferFulfill(doc.data().activityfullfilled)}
                                            </p>
                                            <p style="color: #ff0000">
                                            Reflect:${doc.data().Reflect}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
                }
            )
            document.getElementById('adminOverviewStudentAll').innerHTML = history.join('');
        })
}
//admin
auth.onAuthStateChanged(user =>{
    if(user){
        const admin = db.collection('management').doc('admin')
        const STUDENT = db.collection('STUDENT')
        const faculty = db.collection('faculty')
        const management = db.collection('management')
        const student_summary = db.collection('student_summary')



        showfacultyBtn.onclick=()=>{
            tablehead.hidden = true
            facultyOverview.hidden=false
            ChangeMAX.hidden = true
            managementAdminSidebar.hidden = false
        }
        showStudentBtn.onclick=()=>{
            tablehead.hidden = false
            facultyOverview.hidden=true
            ChangeMAX.hidden = true
            managementAdminSidebar.hidden = true
        }
        changeMaxHour.onclick=()=>{
            tablehead.hidden = true
            facultyOverview.hidden=true
            ChangeMAX.hidden = false
            managementAdminSidebar.hidden = true
        }




        //Add admin And delete admin
        addAdminBTN.onclick=()=>{
            admin.update({
                admin: firebase.firestore.FieldValue.arrayUnion(adminEmailField.value.trim())
            })
            adminEmailField.value = ''

        }
        deleteAdminBTN.onclick=()=>{
            admin.update({
                admin: firebase.firestore.FieldValue.arrayRemove(adminEmailField.value.trim())
            })
            adminEmailField.value = ''
        }

        //Add faculty and delete faculty
        addfacultyBTN.onclick=()=>{
            const fieldVal = adminEmailField.value

            faculty
                .doc(adminEmailField.value)
                .get()
                .then(doc=>{
                    if(doc.exists){

                    }
                    else{

                        db.collection('faculty')
                            .doc(fieldVal)
                            .set({
                                'student': [],
                            })
                    }
                    }
                )

            management
                .doc('faculty')
                .update({
                    faculty: addItemToArray(adminEmailField.value.trim())
                })

            adminEmailField.value = ''
        }

        deletefacultyBTN.onclick=()=>{
            management
                .doc('faculty')
                .update({
                    faculty: removeItem(adminEmailField.value.trim())
                })

            db.collection('faculty')
                .doc(adminEmailField.value)
                .delete()
            adminEmailField.value = ''
        }

        //Add Student to faculty
        AssignBTN.onclick=()=>{
            const facultyEmail = facultyEmailField.value
            const studentEmail = studentEmailField.value
            faculty
                .doc(facultyEmail)
                .update({
                    student: addItemToArray(studentEmail)
                })
            student_summary
                .doc(studentEmail)
                .update({
                    mentor:facultyEmail
                })

        }
        RemoveBTN.onclick=()=>{
            const facultyEmail = facultyEmailField.value
            const studentEmail = studentEmailField.value
            faculty
                .doc(facultyEmail)
                .update({
                    student: removeItem(studentEmail)
                })
            student_summary
                .doc(studentEmail)
                .update({
                    mentor:''
                })

        }
        ClearAssignRemoveBTN.onclick=()=>{
            studentEmailField.value=''
            facultyEmailField.value=''
            adminEmailField.value=''
        }


        //Management admin tap
        admin
            .onSnapshot(doc=>{
                const adminlist = doc.data().admin.map(
                    ad=>{
                        return `<div><a onclick="setAdminEmailField('${ad}')">${ad}</a></div>`
                    }
                )
                document.getElementById('admintap').innerHTML = adminlist.join('')
            })

        //casting Management faculty access level
        management
            .doc('faculty')
            .onSnapshot(doc=>{
                const list = doc.data().faculty.map(
                    ad=>{
                        return `<div><a onclick="setAdminEmailField('${ad}')">${ad}</a></div>`
                    }
                )
                facultyCard.innerHTML = list.join('')

            })




        //Management change hour tap, show current hours cap.
        management
            .doc('hourCap')
            .onSnapshot(doc=>{
                AdminChangeHourAcive.innerHTML = doc.data().Active+" hours"
                AdminChangeHourReceptive.innerHTML = doc.data().Receptive+" hours"
                AdminChangeHourRequired.innerHTML = doc.data().Required+" hours"
            })
        submitChangehourBTN.onclick=()=>{
            if(changeActivefield.value !==''){
                management
                    .doc('hourCap')
                    .update({
                        Active:parseInt(changeActivefield.value),
                    })
            }
            if(changeReceptivefield.value !==''){
                management
                    .doc('hourCap')
                    .update({
                        Receptive:parseInt(changeReceptivefield.value),
                    })
            }
            if(changeRequiredfield.value !==''){
                management
                    .doc('hourCap')
                    .update({
                        Required:parseInt(changeRequiredfield.value),
                    })
            }
            changeActivefield.value =''
            changeReceptivefield.value=''
            changeRequiredfield.value=''

        }


        //Management faculty tap
        faculty
            .onSnapshot(querySnapshot => {
                const faculty = querySnapshot.docs.map(
                    doc => {
                        console.log(doc.id)
                        return `<li class="layui-col-md12 animate__animated animate__fadeIn">
                                    <div class="layui-card">
                                        <div class="layui-card-header layui-row">
                                       Mentor:  <a class="layui-btn layui-btn-primary" onclick="setFacultyEmailField('${doc.id}')">
                                        ${doc.id}</a>                                        
                                        </div>
                                        <div class="layui-card-body">                                                                      
                                            ${givebackHTML(doc.data().student)}
                                        </div>
                                    </div>
                                </li>`
                    });
                facultyTap.innerHTML = faculty.join('');

            })
        //Management Student tap
        unsubscribe = student_summary
            //.where('summary','==',true)
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                const history = querySnapshot.docs.map(
                    doc => {
                        return `
                         <div class="">
                            <div style="padding: 0px 15px 0px 15px;; background-color: #F2F2F2;">
                                <div class="layui-row layui-col-space6">
                                    <div class="layui-col-md4">
                                        <div class="layui-card">
                                            <buton class="layui-card-body layui-btn layui-btn-fluid"
                                            onclick="setStudentEmailField('${doc.data().useremail}')">
                                                ${doc.data().Summary_name}
                                            </buton>
                                        </div>
                                    </div>
                                    <div class="layui-col-md8">
                                        <div class="layui-card">
                                        <div class="layui-card-body">${doc.data().useremail}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    });
                document.getElementById('listofStudentSelect').innerHTML = history.join('');

            })
        // overview
        unsubscribe = student_summary
            //.where('summary','==',true)
            .onSnapshot(querySnapshot => {
                // Map results to an array of li elements
                const history = querySnapshot.docs.map(
                    doc => {
                        return `
                         <div class="">
                            <div style="padding: 0px 15px 0px 15px;; background-color: #F2F2F2;">
                                <div class="layui-row layui-col-space6">
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                <a onclick="getStudentAll('${doc.data().useremail}')">${doc.data().Summary_name}</a>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Active} hours
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Receptive} hours
                                            </div>
                                        </div>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="layui-card">
                                            <div class="layui-card-body">
                                                ${doc.data().Required} hours
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    });
                table.innerHTML = history.join('');

            })


    }
    else{


        unsubscribe && unsubscribe();
    }
})



