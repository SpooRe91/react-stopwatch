export const NavBar = (props) => {

    let user = {
        name: "Martin",
        age: 30
    }


    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Начало</a>
                </li>
                <li>
                    <a href="/recipe/browse">Търсене на рецепти</a>
                </li>

                <li>
                    <a href="/about">Относно</a>
                </li>
                <li>
                    <a href="/contacts">Контакти</a>
                </li>

                <li>
                    <a href="/auth/register">Регистрация</a>
                </li>

                <li>
                    <a href="/auth/login">Вход</a>
                </li>

                <li>
                    <a href="/recipe/add">Добави рецепта</a>
                </li>

                <li>
                    <a href="/recipe/myRecipes">Моите рецепти</a>
                </li>

                <li>

                    <a className="profile-name" href="/recipe/myRecipes"><strong>{user.name}</strong></a>

                </li>

                <li>
                    <a href="/auth/logout" className="logout">Изход</a>
                </li>


            </ul>
        </nav>
    );
}