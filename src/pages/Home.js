import { Component } from "react";
import musicdata from "../musicdata" ;
import Music from "../components/Music";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data : musicdata.data
        };
    }
    render() {
        return(
            <div className="home">
                
                {this.state.data.map((musicBox,i)=>(
                    <Music musicBox={musicBox} key={i} />
                ))}
                
            </div>
        );
    } 
}

export default Home;