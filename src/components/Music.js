function Music(props) {
    return (
        <div className="musicbox">
            <img src={props.musicBox.img} alt={props.musicBox.name} />
            <div className="container">
                <h3>{props.musicBox.name}</h3>
                <p>by {props.musicBox.songer}</p>
                <audio controls>
                    <source src={props.musicBox.src} type="audio/mp3" />
                </audio>
            </div>
        </div>
    );
}

export default Music;