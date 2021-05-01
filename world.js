$(document).ready(function(){
    var url="https://api.covid19api.com/summary"
    
    $.getJSON(url,function(data){
        var total_active,total_recovered,total_deaths,total_confirmed,new_confirmed,new_recovered,new_decreased
        var Country=[]
        var TotalConfirmed=[]
        var TotalRecovered=[]
        var TotalDeaths=[]
        
        $.each(data.Array,function(id,obj){
            Country.push(obj.Country)
            TotalConfirmed.push(obj.TotalConfirmed)
            TotalRecovered.push(obj.TotalRecovered)
            TotalDeaths.push(obj.TotalDeaths)

        })
        
        
        
        
        total_active=data.Global[0].active
        total_confirmed=data.Array[0].TotalConfirmed
        total_recovered=data.Array[0].TotalRecovered
        total_deaths=data.Array[0].TotalDeaths
        
        
        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        
        
        $("#recovered").append(total_recovered)
        
        $("#deaths").append(total_deaths)
        
        
        var myChart=document.getElementById("myChart").getContext('2d')
        var chart=new Chart(myChart,{
            type:'line',
            data:{
                labels:Country,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data: TotalConfirmed,
                        backgroundColor:"#f1c40f",
                        minBarLength:100
                    },
                    
                    {
                        label:"Recovered Cases",
                        data: TotalRecovered,
                        backgroundColor:"#f1c40f",
                        minBarLength:100
                    },
                    
                    {
                        label:"Death Cases",
                        data: TotalDeaths,
                        backgroundColor:"#f1c40f",
                        minBarLength:100
                    },
                    
                    
                    
                    
                ]
            },
            options:{}
        })









       
    })
})

function fetchworld(){
    $.get("https://api.covid19api.com/summary",
         function (data){
            var tbval=document.getElementById('tbval')
            for(var i=1;i<(data['Countries'].length);i++){
                var x=tbval.insertRow()
                x.insertCell(0)
                
                tbval.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country']
               tbval.rows[i].cells[0].style.background='#6c757d'
                tbval.rows[i].cells[0].style.fontWeight='bold'
                tbval.rows[i].cells[0].style.color='black'
                x.insertCell(1)
                
                tbval.rows[i].cells[1].innerHTML=data['Countries'][i-1]['TotalConfirmed']
                tbval.rows[i].cells[1].style.fontWeight='bold'
                tbval.rows[i].cells[1].style.color='#ffc107'
                x.insertCell(2)
                
                tbval.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalRecovered']
                tbval.rows[i].cells[2].style.fontWeight='bold'
                tbval.rows[i].cells[2].style.color='darkgreen'
                
                x.insertCell(3)
                
                tbval.rows[i].cells[3].innerHTML=data['Countries'][i-1]['TotalDeaths']
                tbval.rows[i].cells[3].style.fontWeight='bold'
                tbval.rows[i].cells[3].style.color='red'
                x.insertCell(4)
                
                tbval.rows[i].cells[4].innerHTML=data['Countries'][i-1]['NewConfirmed']
                tbval.rows[i].cells[4].style.fontWeight='bold'
                tbval.rows[i].cells[4].style.color='#17a2b8'
                
                x.insertCell(5)
                
                tbval.rows[i].cells[5].innerHTML=data['Countries'][i-1]['NewDeaths']
                tbval.rows[i].cells[5].style.fontWeight='bold'
                tbval.rows[i].cells[5].style.color='#e83e8c'

                
                
                
                
            }
        }
         
    )
}







