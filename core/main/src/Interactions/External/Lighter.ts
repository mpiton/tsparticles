import { Utils } from "../../Utils";
import { HoverMode } from "../../Enums/Modes";
import type { Container } from "../../Core/Container";
import { ExternalBase } from "./ExternalBase";

export class Lighter extends ExternalBase {
    constructor(container: Container) {
        super(container, "lighter");
    }

    public interact(): void {
        const container = this.container;
        const options = container.options;

        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;

            if (!mousePos) {
                return;
            }

            container.canvas.drawLight(mousePos);
        }
    }

    public isEnabled(): boolean {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.options.interactivity.events;

        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }

        const hoverMode = events.onHover.mode;

        return Utils.isInArray(HoverMode.light, hoverMode);
    }

    public reset(): void {
        // do nothing
    }
}
