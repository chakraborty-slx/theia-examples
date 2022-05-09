import * as React from "react";
import {
  injectable,
  postConstruct,
  inject,
} from "@theia/core/shared/inversify";
import { AlertMessage } from "@theia/core/lib/browser/widgets/alert-message";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { MessageService } from "@theia/core";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { ProblemManager } from "@theia/markers/lib/browser/problem/problem-manager";
import URI from "@theia/core/lib/common/uri";

// import {EditorManager} from '@theia/editor/lib/browser';
@injectable()
export class TheiaWidgetWidget extends ReactWidget {
  static readonly ID = "theia-widget:widget";
  static readonly LABEL = "TheiaWidget Widget";

  @inject(MessageService)
  protected readonly messageService!: MessageService;

  @inject(ProblemManager)
  protected readonly problemManager: ProblemManager;

  @inject(WorkspaceService)
  private readonly workspaceService: WorkspaceService;

  @postConstruct()
  protected async init(): Promise<void> {
    this.id = TheiaWidgetWidget.ID;
    this.title.label = TheiaWidgetWidget.LABEL;
    this.title.caption = TheiaWidgetWidget.LABEL;
    this.title.closable = true;
    this.title.iconClass = "fa fa-window-maximize"; // example widget icon.
    this.update();
  }

  render(): React.ReactElement {
    const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
    return (
      <div id="widget-container">
        <AlertMessage type="INFO" header={header} />
        <button
          className="theia-button secondary"
          title="Display Message"
          onClick={(_a) => this.displayMessage()}
        >
          Display Message
        </button>
      </div>
    );
  }

  protected displayMessage(): void {
    this.messageService.info(
      "Congratulations: TheiaWidget Widget Successfully Created!"
    );
    this.workspaceService.getWorkspaceRootUri(new URI("asdf"));
  }

  // currentFileEditorWidget = (): EditorWidget | undefined => {
  //     const editorWidget = this.editorManager.currentEditor;
  //     if (editorWidget) {
  //         if (editorWidget.editor.uri.scheme === 'file') {
  //             return editorWidget;
  //         }
  //     }
  //     return undefined;
  // };
}
