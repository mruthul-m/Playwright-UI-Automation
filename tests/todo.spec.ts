import { test as base, expect } from "@playwright/test";
import { TodoPage } from "../pages/todo-page";
import { todo } from "node:test";

const test = base.extend<{todoPage : TodoPage}>({
    todoPage : async ({page}, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await todoPage.addTodo('item 1');
        await todoPage.addTodo('item 2');
        await use(todoPage);
        await todoPage.removeAll();
    },

})

test('should add an item', async ({todoPage}) => {
    await todoPage.addTodo('my item');
})

test('should remove an item', async ({todoPage}) => {
    await todoPage.remove('item 1')
        
})

test.skip('skip', ()=> {
    
})