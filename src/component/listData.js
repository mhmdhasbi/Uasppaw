import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ListData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async() =>{
        const responsed = await axios.get('https://thunderous-florentine-f88db8.netlify.app/.netlify/functions/api/user')
        setData(responsed.data)
        console.log(responsed.data)
    }
    const deleteData = async(id) =>{
        try {
            await axios.delete(`https://thunderous-florentine-f88db8.netlify.app/.netlify/functions/api/user/${id}`,data,
            {headers: {
                'Content-Type': 'application/json',
            },
        })
            getData();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Nim</th>
                        <th>Jurusan</th>
                        <th>fakultas</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>alamat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index)=>{
                        return (
                            <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.nama}</td>
                            <td>{user.nim}</td>
                            <td>{user.jurusan}</td>
                            <td>{user.fakultas}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>{user.alamat}</td>
                            <td>
                                <Link to={`/edit/${user._id}`} className='button is-warning is-small'>Edit</Link>
                                <button onClick={() => deleteData(user._id)} className='button is-warning is-small'>delete</button>
                            </td>
                        </tr>
                        )
                        
                    })}
                </tbody>
            </table>
            <div>
                <Link to={'/add'} className='button is-primary'>Tambah Data Mahasiswa</Link>
            </div>
        </div>
    </div>
  )
}

export default ListData;