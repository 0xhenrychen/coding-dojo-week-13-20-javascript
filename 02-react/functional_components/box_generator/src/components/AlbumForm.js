import React, {useState} from 'react';

const AlbumForm = (props) => {
    // 1. One way to declare the variables and the useState.
    // const [albumName, setAlbumName] = useState("")
    // const [bandName, setBandName] = useState("")
    // const [releaseYear, setReleaseYear] = useState("")
    // const [recordsSold, setRecordsSold] = useState("")

    // Call on the set function but might not be the most efficient way to go about it.
    // const handleAlbumNameChange = (e) => {
    //     console.log(e)
    //     console.log(e.target)
    //     console.log(e.target.value)
    //     setAlbumName(e.target.value)

    // 2. Another way to declare the variables and the useState.
    const [album, setAlbum] = useState({
        albumName: "",
        bandName: "",
        releaseYear: 1900,
        recordsSold: 0
    })

    const onChangeHandler = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setAlbum({...album, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`New Album: ${JSON.stringify(album)}`)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Add Your Favorite Album</h2>
                    <label htmlFor="albumName">Album Name:</label>
                    <input type="text" name="albumName" onChange={onChangeHandler} />
                    {
                        album.albumName.length < 3 ?
                        <p>Album name must be 3 or more characters.</p> :
                        null
                    }
                </div>

                <div>
                    <label htmlFor="bandName">Band Name:</label>
                    <input type="text" name="bandName" onChange={onChangeHandler} />
                    {
                        album.bandName.length < 3 ?
                        <p>Band name must be 3 or more characters.</p> :
                        null
                    }
                </div>

                <div>
                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="number" name="releaseYear" onChange={onChangeHandler} />
                    {
                        album.releaseYear < 1900 ?
                        <p>Release year has to be 1900 or later.</p> :
                        null
                    }
                </div>

                <div>
                    <label htmlFor="recordsSold">Records Sold:</label>
                    <input type="number" name="recordsSold" onChange={onChangeHandler} />
                    {
                        album.recordsSold < 0 ?
                        <p>Records sold must be at least 0 or more.</p> :
                        null
                    }
                </div>
                <div>
                    <button>Add Album</button>
                </div>
            </form>
            <h2>{album.albumName}</h2>
            <h2>{album.bandName}</h2>
            <h2>{album.releaseYear}</h2>
            <h2>{album.recordsSold}</h2>
        </>
    );
}

export default AlbumForm;
