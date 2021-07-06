var app1=new Vue({
    el: '#app-1',
    data: {
        client_name: "",
        client_course: "",
        client_term: ""
    }
});

var app2=new Vue({

    el: '#app-2',
    data: {
        clients : [
            {text: "ID 1 /名前 野呂浩良 /コース 機械学習コース /受講期 201901 "},
            {text: "ID 2 /名前 富永修司 /コース Webエンジニアコース /受講期 201711 "},
            {text: "ID 3 /名前 斉藤一起 /コース Webエンジニアコース /受講期 201711 "}
        ]
    },
    methods: {
        insertClient: function() {
	    if(!client_name.value){
		alert('名前を入力して下さい');
		return;
	    }
            ha={};
            ha["text"]="ID 1 /名前 "+client_name.value+" /コース " + client_course.value + "/受講期 " + client_term.value;

            //clients.push(ha);
            //app2.clients.push(ha);
            this.clients.push(ha);

	    client_name.value=""
	    client_course.value=""
	    client_term.value=""
	    //app1.client_name=""
	    //app1.client_course=""
	    //app1.client_term=""

        }
    }
});
