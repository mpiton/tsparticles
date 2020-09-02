import type { IClickEvent } from "../../../Interfaces/Interactivity/Events/IClickEvent";
import { ClickMode } from "../../../../Enums";
import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

/**
 * [[include:Options/Interactivity/Click.md]]
 * @category Options
 */
export class ClickEvent implements IClickEvent, IOptionLoader<IClickEvent> {
    /**
     * The click event handler enabling setting
     */
    public enable;

    /**
     * Click mode values described in [[ClickMode]], an array of these values is also valid
     */
    public mode: SingleOrMultiple<ClickMode | keyof typeof ClickMode | string>;

    constructor() {
        this.enable = false;
        this.mode = [];
    }

    public load(data?: RecursivePartial<IClickEvent>): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
