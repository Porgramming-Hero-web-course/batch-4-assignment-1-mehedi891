In typescript the union type and intersection type are important features for data stracturing and handle the complex data.

Let's understand the Union type:

#Union type handle the data like "or" in Javascript. That means we can set/fixed some value in a variable ,then we can access those values . But without those fixed values we can't access any other value or insert any other value. let's see an example:

```type Isloggedin = 'active' | 'logout' | 'guest';

#This example we can see in Isloggedin type we can only get "active" , "logout" and "guest". If we try to input someting else then it will show the error.Like:

 ```const userStatus:Isloggedin = 'someting';

#This will show the error. Becuse the 'something' is not available on 'Isloggedin' type.

```const userStatus:Isloggedin = 'active';

#This will not show any error because 'active' is available on 'Isloggedin' types.


#Now let's understand the intersection type:

#Intersection types mainly combine two types at a time. If we have two types and we need to create a another type that types are combination of those two types then we do not need to declare another type , we can create the type with help of intersection.

#Let's see an example:

```type FrontendDeveloper = {

    skils: string[];
    position1 : string;

}

```type BackendDeveloper = {

    skils: string[];
    position2 : string;

}

#Now if we need the Fullstack developer type that has to be property skils,position1 and postion 2 . Then nwe can intersection those two types.

```type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

#Now the FullstackDeveloper type mainly will show like this way:

```type FullstackDeveloper = {

    skils : string[];
    position1: string;
    position2 : string;

}

#We do not need to write this types because when we intersection those two types they are automatically grab all the common and uncommon values within the FullstackDeveloper type.



