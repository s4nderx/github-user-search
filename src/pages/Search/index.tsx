
import DefaultButton from 'core/components/DefaultButton';
import { UserResponse } from 'core/types/UserResponse';
import { http_request } from 'core/utils/request';
import { useState } from 'react';
import './styles.scss'
import UserResult from './components/UserResult';

type FormState = {
    username: string;
}

const Search = () => {

    const [userResponse, setUserResponse] = useState<UserResponse>();

    const [formData, setFormData] = useState<FormState>({ username: '' });
    const [isLoading, setIsLoading] = useState(false);


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value}))
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        http_request({url: `/${formData.username}`}).then((response) =>{
            const data = response.data

            const payload = {
                html_url: data.html_url,
                company: data.company,
                blog: data.blog,
                location: data.location,
                created_at: data.created_at,
                public_repos: data.public_repos,
                followers: data.followers,
                following: data.following
            }

            setUserResponse(payload)
            console.log(payload)
        }).finally(() => {
            setIsLoading(false)
        })   
    }
    
    return (
        <div className="search-content">
            <div className="search-form-container">
                <div className="search-form-container-content">
                    <h1>Encontre um perfil Github</h1>
                    <form onSubmit={handleSubmit}>
                            <div className="user-search-form">
                                <input 
                                value={formData.username}
                                name="username" 
                                type="text"
                                onChange={handleOnChange}
                                placeholder="Username"/>
                            </div>
                            <DefaultButton text="Encontrar"></DefaultButton>
                    </form>

                </div>
            </div>
            <div className="search-result-containter-content">
                <UserResult />
            </div>
        </div>
    )
}

export default Search;