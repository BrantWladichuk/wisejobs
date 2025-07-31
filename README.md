## WiseJobs

Install:
- Clone Repo
- Install Dependencies `npm install && composer install`
- Rename `.env-example` to `.env`
- Migrate DB `php artisan migrate`
- Seed DB `php artisan db:seed`
- Run! `composer run dev`
- Visit `http://127.0.0.1:8000/`

Admin account:
e: `wiseguy@wisejobs.com`
p: `w1$3j0b$`


Uses Sqlite for demo purposes, but you can setup a MySQL DB if you'd like. Just put in the credentials in the `.env` and re-run the migrations.

