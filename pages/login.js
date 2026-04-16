export default function login () {
    return `<form action='/submit' method='post'> 
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='type password'/>
        <button>submit</button>
        </form> <a href='/'>home</a>`
}