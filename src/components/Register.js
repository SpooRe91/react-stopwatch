export const Register = () => {
    return (
        <div className="form">
            <form method="POST">
                <label className="already-reg" htmlFor="text">e-mail</label>
                <input type="text" id="register-email" name="email" placeholder="e-mail..." required />

                <label className="already-reg" htmlFor="password">парола</label>
                <input type="password" id="register-password" name="password" placeholder="парола..." required />

                <label className="already-reg" htmlFor="re-password">повторете паролата</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="повторете паролата..." required />

                <input className="already-reg" type="submit" value="Регистриране" />
            </form>
            <h3 className="already-reg">Вече сте регистрирани? Влезте от <a href="/auth/login">TУК</a></h3>
        </div>
    );
}