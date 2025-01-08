import React from "react";
//  import css 
import './Cards_Dashboard.css'
import ChartComponent from "../ChartComponent/ChartComponent";
function CardsDashboard() {
    const itemsDashboard = [
        {id:1, title: "Título 1 "},
        {id:2, title: "Título 2"},
       
    ]
    return ( 
        <>
        <section className="container_card_dashboard_">
            {
              itemsDashboard.map((item)=>(
                <div key={item.id} className="itemsDashboard_list">
                    <h3>{item.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt et ipsum, voluptas aspernatur sint ab, ducimus iure repellendus maxime architecto autem dolorem quidem. Nemo voluptatum maxime laudantium officiis nihil.</p>
                    
                </div>
              ))  
            }
        </section>
        <section className="grafico_">
        <ChartComponent/>
        </section>
        
        </>
     );
}

export default CardsDashboard;

