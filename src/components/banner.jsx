const Banner = (props) => {
    let title = props.data
    return (
        <div className="Banner">
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;