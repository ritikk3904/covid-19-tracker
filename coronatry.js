$(document).ready(function(){
    var url="https://api.covid19india.org/data.json"
    
    $.getJSON(url,function(data){
        var total_active,total_recovered,total_deaths,total_confirmed,new_confirmed,new_recovered,new_decreased
        var state=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        
        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)

        })
        
        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        
        
        
        total_active=data.statewise[0].active
        total_confirmed=data.statewise[0].confirmed
        total_recovered=data.statewise[0].recovered
        total_deaths=data.statewise[0].deaths
        
        
        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        
        
        $("#recovered").append(total_recovered)
        
        $("#deaths").append(total_deaths)
        
        
        var myChart=document.getElementById("myChart").getContext('2d')
        var chart=new Chart(myChart,{
            type:'bar',
            data:{
                labels:state,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data: confirmed,
                        backgroundColor:"#f1c40f",
                        minBarLength:100
                    },
                    
                    {
                        label:"Recovered Cases",
                        data: recovered,
                        backgroundColor:"lightgreen",
                        minBarLength:100
                    },
                    
                    {
                        label:"Death Cases",
                        data: deaths,
                        backgroundColor:"red",
                        minBarLength:100
                    },
                    
                    
                    
                    
                ]
            },
            options:{}
        })









       
    })
})

function fetch(){
    $.get("https://api.covid19india.org/data.json",
         function (data){
            var tbval=document.getElementById('tbval')
            for(var i=1;i<(data['statewise'].length);i++){
                var x=tbval.insertRow()
                x.insertCell(0)
                
                tbval.rows[i].cells[0].innerHTML=data['statewise'][i-1]['state']
                tbval.rows[i].cells[0].style.background='#6c757d'
                tbval.rows[i].cells[0].style.color='#fff'
                
                x.insertCell(1)
                
                tbval.rows[i].cells[1].innerHTML=data['statewise'][i-1]['confirmed']
                tbval.rows[i].cells[1].style.background='#ffc107'
                tbval.rows[i].cells[1].style.color='black'
                
                x.insertCell(2)
                
                tbval.rows[i].cells[2].innerHTML=data['statewise'][i-1]['recovered']
                tbval.rows[i].cells[2].style.background='lightgreen'
                tbval.rows[i].cells[2].style.color='black'
                
                x.insertCell(3)
                
                tbval.rows[i].cells[3].innerHTML=data['statewise'][i-1]['deaths']
                tbval.rows[i].cells[3].style.background='red'
                tbval.rows[i].cells[3].style.color='black'
                
                x.insertCell(4)
                
                tbval.rows[i].cells[4].innerHTML=data['statewise'][i-1]['deltaconfirmed']
                tbval.rows[i].cells[4].style.background='#17a2b8'
                tbval.rows[i].cells[4].style.color='black'
                
                x.insertCell(5)
                
                tbval.rows[i].cells[5].innerHTML=data['statewise'][i-1]['deltadeaths']
                tbval.rows[i].cells[5].style.background='#e83e8c'
                tbval.rows[i].cells[5].style.color='black'

                
                
                
                
            }
        }
         
    )
}







