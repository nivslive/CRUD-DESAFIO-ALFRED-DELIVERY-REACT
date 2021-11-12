import React, {Component} from 'react'
import Main from '../home/template/Main'
import axios from 'axios'


const headerProps = {
    icon: 'users',
    title: 'Cadastro de Afazeres',
    subtitle: 'Cadastro de Afazeres para Alfred Delivery: incluir, Listar, alterar e Excluir.'

}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {
        name: '',
    },
    list: []
}


export default class UserCrud extends Component {
    state = {...initialState}


    componentWillMount(){
axios(baseUrl).then(resp => {
    this.setState({list: resp.data})
})
    }





    clear() {
        this.setState({
            user: initialState.user
        })
    }





    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({
                    user: initialState.user,
                    list
                })
            })
    }


updateField(event) {

    const user = {...this.state.user}
    user[event.target.name] = event.target.value
    this.setState({user})}

renderForm() {
    return ( <div className = "form" >
            <div className = "row" >
            <div className = "col-12 col-md-6" >
            <div className = "form-group" >
            <label> afazeres </label> <input type = "text"
            className = "form-control"
            name="name"
            value= {this.state.user.name}
            onChange = {e => this.updateField(e)}
            placeholder = "Digite o afazer..." / >

            </div></div>

            <div className = "col-12 col-md-6">

          </div></div>

            <hr/>

            <div className = "row">

            <div className = "col-12 d-flex justify-content-end" >

            <button className = "btn btn-primary"
            onClick = {(e) => this.save(e)}> Salvar </button> 
        <button onClick = {e => this.clear(e)}
    className = "btn btn-secondary ml-12" >
        Cancelar </button> </div> </div></div>
)
}



getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
   if(add) list.unshift(user)
    return list
}

load(user){
   this.setState({user}) 
}

remove(user){
   axios.delete(`${baseUrl}/${user.id}`).then(resp => {
    const list = this.getUpdatedList(user, false)
    this.setState({ list })

   })
}

renderTable(){
    return (<table className="table mt-4">
        <thread>
            <tr>
                <th>ID</th>
                <th>Afazer</th>
                <th>Ações</th>
            </tr>
        </thread>
        <tbody>
            {this.renderRows()}
        </tbody>
    </table>)
}


renderRows() { return this.state.list.map(user =>{
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
        

        <button className="btn btn-warning" onClick={() => this.load(user)}>
            <i className="fa fa-pencil"></i>
        </button>


        <button className="btn btn-danger ml-2"
        onClick={() => this.remove(user)}>
            <i className="fa fa-trash"></i>
        </button>


        </tr>
    )
} )}
render() {

    return ( <Main {...headerProps} >
        {this.renderForm()}
        {this.renderTable()} 
        </Main>
    )
}
}