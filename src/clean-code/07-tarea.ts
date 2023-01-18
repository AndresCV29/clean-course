(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes  {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }
    /* class InputAttributes extends HtmlElement {
        constructor(
            public value: string,
            public placeholder: string,
            id: string,
        ) {
            super(id, 'input');
        }
    } */

    class InputEvents {

        constructor () {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
/*     class InputEvents extends InputAttributes {
        constructor( value: string, placeholder: string, id: string ) {
            super( value, placeholder, id );
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    } */

    interface InputElementProps {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public InputAttributes: InputAttributes;
        public events: InputEvents;

        constructor({
            id,
            type,
            value,
            placeholder,
        }:InputElementProps){
            this.htmlElement = new HtmlElement(id, type);
            this.InputAttributes = new InputAttributes(value, placeholder)
            this.events = new InputEvents;
        }

    }


    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField = new InputElement({
        id: 'txtName',
        type: 'input',
        value: 'Fernando',
        placeholder: 'Enter first name'
    });

    console.log({ nameField });


})()