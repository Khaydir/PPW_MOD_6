function KartuMenu(props) {
    return(
        <div className="kartu menu">
            <h3>{props.nama}</h3>
            <p>Nama: {props.nama} </p>
            <p>Harga: {props.harga}</p>
            <p>Kategori: {props.kategori}</p>
        </div>
    );
}