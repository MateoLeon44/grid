# Grid component

## How to run

Requirements:
- npm/node (Node v.19.9.0 was used when creating this project)

On the root folder of the project

```
/**
* Install all dependencies
* legacy peer deps flag is needed, since a breaking change version of EsLint was used and is not upgraded on most of the libraries by the time this repo was created
*/
npm i --legacy-peer-deps

// Runs locally the vue project
npm run dev
```

## Objectives

This grid component is a generic component that has the next features:

1.  Users can search for “deals” by typing into the search box and text they type should be
used to filter the rows in the grid by determining if any of the string columns contain that
text or a close approximation of it.
2. Users can sort columns (ASC/DESC).
3. Users can click any record and open a task pane on the right side of the screen to show
the details of the record.
4. Users can select multiple rows (if more than one is selected, the task pane must be
closed).
5. Users can export their data to CSV
   
![Screenshot 2024-07-11 at 11 42 11 PM](https://github.com/user-attachments/assets/0950624d-dda9-4eef-9554-7daccdeda218)

![Screenshot 2024-07-11 at 11 44 50 PM](https://github.com/user-attachments/assets/9cea6c8b-2f83-4dcd-9a57-9b9706f1ed1e)

![Screenshot 2024-07-11 at 11 45 37 PM](https://github.com/user-attachments/assets/19e46691-7cab-42d8-b074-0d74247ef2cd)

## Tech stack

- Vue3
- Typescript
- Vite
- Vitest



