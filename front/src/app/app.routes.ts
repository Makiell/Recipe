import { Routes } from '@angular/router';
import { LoginComponent } from "./view/forum/login/login.component";
import { PostComponent } from "./view/forum/post/post.component";
import { CommentComponent } from "./view/forum/comment/comment.component";
import { ComentateComponent } from "./view/forum/comentate/comentate.component";
import { RegisterComponent } from './view/forum/registration/registration.component';
import { ForumComponent } from './view/forum/forum/forum.component';
import { BottomPostsComponent } from './view/forum/bottom-posts/bottom-posts.component';
import { HomeComponent } from './view/recipe/home/home.component';
import { CharactersComponent } from './view/recipe/characters/characters.component';
import { CharacterdetailComponent } from './view/recipe/characterdetail/characterdetail.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: CharactersComponent,
                title: 'Recipes'
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'post', component: PostComponent },
    { path: 'bottom-posts', component: BottomPostsComponent },
    { path: 'comment/:id', component: CommentComponent },
    { path: 'comentate/:post_id', component: ComentateComponent },
    { path: 'comentate/:post_id/:comm_id', component: ComentateComponent },
    {
        path: 'recipe/:name',
        component: CharacterdetailComponent,
        title: 'Recipe'
    }
];
