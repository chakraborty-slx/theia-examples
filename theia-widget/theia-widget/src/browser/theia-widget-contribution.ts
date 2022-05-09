import { inject, injectable } from "@theia/core/shared/inversify";
import {
  MenuModelRegistry,
  MessageService,
  ProgressService,
} from "@theia/core";
import { TheiaWidgetWidget } from "./theia-widget-widget";
import {
  AbstractViewContribution,
  StatusBar,
  StatusBarAlignment,
} from "@theia/core/lib/browser";
import { Command, CommandRegistry } from "@theia/core/lib/common/command";

export const TheiaWidgetCommand: Command = { id: "theia-widget:command" };

export const TestProgressCommand: Command = {
  id: "theia-widget:progress-status-command",
  label: "Show running progress",
};

@injectable()
export class TheiaWidgetContribution extends AbstractViewContribution<TheiaWidgetWidget> {
  @inject(MessageService)
  protected readonly messageService: MessageService;

  @inject(ProgressService) protected readonly progressService: ProgressService;

  @inject(StatusBar)
  protected readonly statusBar: StatusBar;
  /**
   * `AbstractViewContribution` handles the creation and registering
   *  of the widget including commands, menus, and keybindings.
   *
   * We can pass `defaultWidgetOptions` which define widget properties such as
   * its location `area` (`main`, `left`, `right`, `bottom`), `mode`, and `ref`.
   *
   */
  constructor() {
    super({
      widgetId: TheiaWidgetWidget.ID,
      widgetName: TheiaWidgetWidget.LABEL,
      defaultWidgetOptions: { area: "left" },
      toggleCommandId: TheiaWidgetCommand.id,
    });
  }

  /**
     * Example command registration to open the widget from the menu, and quick-open.
     * For a simpler use case, it is possible to simply call:
     ```ts
        super.registerCommands(commands)
     ```
     *
     * For more flexibility, we can pass `OpenViewArguments` which define 
     * options on how to handle opening the widget:
     * 
     ```ts
        toggle?: boolean
        activate?: boolean;
        reveal?: boolean;
     ```
     *
     * @param commands
     */
  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(TheiaWidgetCommand, {
      execute: () => super.openView({ activate: false, reveal: true }),
    });

    commands.registerCommand(TestProgressCommand, {
      execute: async () => {
        const id = "show-running-tasks";
        this.statusBar.setElement(id, {
          text: `testing : progress in status`,
          tooltip: "testing : progress in status",
          alignment: StatusBarAlignment.LEFT,
          priority: 2,
          onclick: () => this.messageService.info("Test status bar"),
        });

        // await this.progressService.showProgress({
        //   text: `testing : progress in status`,
        //   options: { location: "window" },
        //   onClick: () => this.messageService.info("Test status bar"),
        // });
        // this.messageService
        //   .showProgress({
        //     text: "Starting to report progress",
        //   })
        //   .then((progress) => {
        //     window.setTimeout(() => {
        //       progress.report({
        //         message: "First step completed",
        //         work: { done: 25, total: 100 },
        //       });
        //     }, 2000);
        //     window.setTimeout(() => {
        //       progress.report({
        //         message: "Next step completed",
        //         work: { done: 60, total: 100 },
        //       });
        //     }, 4000);
        //     window.setTimeout(() => {
        //       progress.report({
        //         message: "Complete",
        //         work: { done: 100, total: 100 },
        //       });
        //     }, 6000);
        //     window.setTimeout(() => progress.cancel(), 7000);
        //   });
      },
    });
  }

  /**
     * Example menu registration to contribute a menu item used to open the widget.
     * Default location when extending the `AbstractViewContribution` is the `View` main-menu item.
     * 
     * We can however define new menu path locations in the following way:
     ```ts
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: 'id',
            label: 'label'
        });
     ```
     * 
     * @param menus
     */
  registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);
  }
}
