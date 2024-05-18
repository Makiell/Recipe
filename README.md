# Книга Рецептов

## Функциональность

- **Динамический поиск**: Пользователи могут осуществлять поиск по сайту в режиме реального времени.
- **Пагинация**: Используется техника подгрузки данных с API, создавая эффект "бесконечной" ленты, аналогично социальным сетям.
- **Адаптивность**: Сайт полностью адаптивен и оптимизирован для мобильных устройств.
- **Анимации**: Созданы анимации для карточек в каталоге и блоков на детальных страницах.
- **Социальная сеть**: С помощью ***DRF*** реализована ***backend*** часть сайта, добавлен форум, где пользователи могут писать посты, оставлять комментарии и ставить лайки. Реализована система регистрации и логина с помощью ***JWT*** токена
- **Сериализация данных на backend**


## Запуск проекта

Чтобы запустить этот проект локально, выполните следующие шаги:

1. Убедитесь, что на вашем компьютере установлены [Node.js](https://nodejs.org/) и [Angular CLI](https://angular.io/cli).
2. Клонируйте репозиторий на ваш локальный компьютер.
3. Откройте терминал и перейдите в директорию проекта.
4. Выполните следующие команды:

Установите зависимости:

```
pip install -r requirements.txt
```

Перейдите в папку front и выполните данную комманду:

```bash
ng serve
```
Перейдите в папку backend и выполните данные комманды:

```
python manage.py runserver
```