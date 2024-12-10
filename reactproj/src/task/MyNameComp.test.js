import {render,screen} from "@testing-library/react"
import MyNameComp from "./MyNameComp";

describe("MyName Component",()=>{
test("render it",()=>{
    render(<MyNameComp/>);
    let createElement=screen.getByText(/this is MyName Component/i);
    expect(createElement).toBeInTheDocument();
})
test("render with props name",()=>{
    render(<MyNameComp name="SelvaBalaji" post="FullStack Developer"/>);
    let createElement=screen.getByText("My Name is:SelvaBalaji");
    expect(createElement).toBeInTheDocument();
    
})
test("render with props post",()=>{
    render(<MyNameComp name="SelvaBalaji"  post="FullStack Developer"/>);
    let createElement=screen.getByText("I am:FullStack Developer");
    expect(createElement).toBeInTheDocument();
    
})

})