var today = new Date()
time = document.getElementById('time')
h1 = document.getElementById('h1')
time.innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//h1.innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


getName = firebase.firestore().collection('db').doc('list').get()

getName
.then(doc =>{
        na = doc.data().name
        h1.innerHTML=na
    }
)