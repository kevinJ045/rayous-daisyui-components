import { Component, Text, Widget } from "rayous";
import { TableController, buildProps } from "rayous/extra";
import "@/styles/daisy.tail.css";
import { Button } from "@/components/button";
import { Accordion } from "@/components/accordion";
import { Badge } from "@/components/badge";
import { Alert } from "@/components/alert";
import { Card } from "@/components/card";
import { Dropdown } from "@/components/dropdown";
import { Modal } from "@/components/modal";

import 'prismjs';
import 'prismjs/components/prism-javascript';
import { Table } from "@/components/table";

const CodeBlock = Widget.model({
	"selector": "pre.codeblock",
	"children": [
		"div.title.text-xl.font-bold",
		"code.code",
	],
	_onMount: function(){
		let that: Widget = this;
		(window as any).Prism.highlightElement(that.raw().find('code').at(0));
	},
	"options": {
		"title": {
			"string": {
				"div.title": {
					"text": "$title"
				}
			}
		},
		"code": {
			"string": {
				"code.code": {
					"html": "$code"
				}
			}
		},
		"lang": {
			"string": {
				"code.code": {
					"addClass": "language-$(lang)"
				},
				"this": {
					"addClass": "language-$(lang)"
				}
			}
		}
	}
}, { code: "" })

const Section = Widget.model<any>({
	selector: 'div.p-5.space-y-2',
	options: {
		title: {
			string: {
				this: {
					prepend: {
						selector: 'div.text-2xl.font-bold',
						text: '$title'
					}
				}
			}
		}
	}
});

export default class extends Component {
	build(props: buildProps) {
		return new Widget({
			children: [
				new Section({
					title: 'Buttons',
					children: [
						new Widget({
							class: 'flex gap-2',
							children: [
								new Button('Primary', {
									variant: 'primary',
								}),
								new Button('Secondary', {
									variant: 'secondary',
								}),
								new Button('Accent', {
									variant: 'accent',
								}),
								new Button('Outline', {
									variant: 'secondary',
									outline: true
								})
							]
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Button('Click Me', {\n\tvariant: 'primary'\n\toutline: true\n})`,
							lang: 'javascript'
						})
					]
				}),
				new Section({
					title: "Accordion",
					children: [
						new Accordion({
							class: 'bg-base-200 w-[200px]',
							accordionName: 'accordion-1',
							title: 'Accordion One',
							content: [
								new Text('Accordion text one.')
							]
						}),
						new Accordion({
							class: 'bg-base-200 w-[200px]',
							accordionName: 'accordion-1',
							title: 'Accordion Two',
							content: [
								new Text('Accordion text two.')
							]
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Accordion({\n\tclass: 'bg-base-200 w-[200px]',\n\taccordionName: 'accordion-1',\n\ttitle: 'Accordion One',\n\tcontent: [\n\t\tnew Text('Accordion text one.')\n\t]\n})`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Badge",
					children: [
						new Widget({
							class: 'flex gap-2',
							children: [
								new Badge({
									title: "Badge"
								}),
								new Badge({
									title: "Primary",
									variant: 'primary'
								}),
								new Badge({
									title: "+99",
									variant: 'error'
								})
							]
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Badge({\n\ttitle: "Badge", \n\tvariant: "primary"\n})`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Alert",
					children: [
						new Alert({
							children: [
								new Text('Alert')
							]
						}),
						new Alert({
							variant: 'info',
							children: [
								new Text('Info: Alert')
							]
						}),
						new Alert({
							variant: 'error',
							children: [
								new Text('Error: Alert')
							]
						}),
						new Alert({
							variant: 'warning',
							children: [
								new Text('Warning: Alert')
							]
						}),
						new Alert({
							variant: 'success',
							children: [
								new Text('Success: Alert')
							]
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Alert({\n\tchildren: [\n\t\tnew Text('Alert')\n\t]\n})`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Card",
					children: [
						new Card({
							class: 'bg-base-200',
							title: 'Card title',
							content: [
								new Text('Card Content')
							],
							actionsClass: 'justify-end',
							actions: [
								new Button('Action')
							]
						}),
						new Card({
							class: 'bg-base-200',
							image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
							title: 'Card title',
							actionsClass: 'justify-end',
							actions: [
								new Button('Action', { variant: 'success' })
							]
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Card({\n\tclass: 'bg-base-200',\n\ttitle: 'Card title',\n\tcontent: [\n\t\tnew Text('Card Content')\n\t],\n\tactionsClass: 'justify-end',\n\tactions: [\n\t\tnew Button('Action')\n\t]\n})`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Dropdown",
					children: [
						new Dropdown({
							items: [
								new Text('Item 1'),
								new Text('Item 2'),
								new Text('Item 3')
							],
							triggerClass: Button.optionsToClass({
								variant: 'accent'
							}),
							trigger: 'Dropdown',
							dropDownClass: 'bg-base-200 rounded-md'
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Dropdown({\n\titems: [\n\t\tnew Text('Item 1'),\n\t\tnew Text('Item 2'),\n\t\tnew Text('Item 3')\n\t],\n\ttriggerClass: Button.optionsToClass({\n\t\tvariant: 'accent',\n\t}),\n\ttrigger: 'Dropdown',\n\tdropDownClass: 'bg-base-200 rounded-md',\n})`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Modal",
					children: [
						new Modal({
							id: 'modal-1',
							content: [
								new Text('Modal!', {
									class: 'font-bold text-lg',
									element: { name: 'h3' }
								}),
								new Text('Close with ESC', {
									class: 'py-4'
								})
							],
							actions: [
								Modal.closer(new Button('Close'))
							]
						}),
						new Button('Open Modal', {
							variant: 'info',
							outline: true,
							onClick(){
								Modal.open('modal-1')
							}
						}),
						new CodeBlock({
							title: 'Code',
							code: `let modal = new Modal({\n\tid: 'modal-1',\n\tcontent: [\n\t\tnew Text('Modal!', {\n\t\t\tclass: 'font-bold text-lg',\n\t\t\telement: { name: 'h3' },\n\t\t}),\n\t\tnew Text('Close with ESC', {\n\t\t\tclass: 'py-4',\n\t\t}),\n\t],\n\tactions: [\n\t\tModal.closer(new Button('Close')),\n\t],\n});\nmodal.open();\n// or\nModal.open('modal-1');`,
							lang: 'javascript',
						})
					]
				}),
				new Section({
					title: "Tables",
					children: [
						new Table({
							controller: new TableController({
								columns: ['no', 'name', 'age'],
								items: [
									{ no: '1', name: 'Someone', age: '10' }
								]
							})
						}),
						new CodeBlock({
							title: 'Code',
							code: `new Table({\n\tcontroller: new TableController({\n\t\tcolumns: ['no', 'name', 'age'],\n\t\titems: [\n\t\t\t{ no: '1', name: 'Someone', age: '10' }\n\t\t]\n\t})\n})`,
							lang: 'javascript',
						})
					]
				})
			]
		});
	}
}