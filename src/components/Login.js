export const Login = () => {

    return (
        <div className="form">
            <form method="POST">

                <label className="already-reg" htmlFor="text">e-mail</label>
                <input type="text" id="login-email" name="email" placeholder="e-mail..." required />

                <label className="already-reg" htmlFor="password">парола</label>
                <input type="password" id="login-password" name="password" placeholder="парола..." required />

                <input className="already-reg" type="submit" value="Вход" />
            </form>
            <h3 className="already-reg">Нямате регистрация? Регистрирайте се <a href="/auth/register">TУК</a></h3>

        </div>);
}
