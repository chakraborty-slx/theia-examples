import "reflect-metadata";
import {
  // bindContributionProvider,
  // CommandContribution,
  // CommandRegistry,
  // CommandService,
  // ILogger,
  MessageService,
} from "@theia/core";
import { ContainerModule, Container } from "@theia/core/shared/inversify";

import { FrontendApplicationConfigProvider } from "@theia/core/lib/browser/frontend-application-config-provider";
import { ApplicationProps } from "@theia/application-package/lib/application-props";
FrontendApplicationConfigProvider.set({
  ...ApplicationProps.DEFAULT.frontend.config,
});

import { TheiaWidgetWidget } from "./theia-widget-widget";
import { render } from "@testing-library/react";
// import { EditorManager } from "@theia/editor/lib/browser";
// import {
//   ApplicationShell,
//   BreadcrumbRenderer,
//   BreadcrumbsRenderer,
//   BreadcrumbsRendererFactory,
//   ContextMenuRenderer,
//   CorePreferences,
//   DefaultBreadcrumbRenderer,
//   DockPanelRenderer,
//   DockPanelRendererFactory,
//   SidePanelHandler,
//   SidePanelHandlerFactory,
//   SplitPositionHandler,
//   StatusBar,
//   StatusBarImpl,
//   TabBarRenderer,
//   TabBarRendererFactory,
//   WidgetFactory,
//   WidgetManager,
// } from "@theia/core/lib/browser";
// import { LabelParser } from "@theia/core/lib/browser/label-parser";
// import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
// import { MockLogger } from "./mock-logger";

// import { bindPreferenceService } from "@theia/core/lib/browser/frontend-application-bindings";
// import { ContextKeyService } from "@theia/core/lib/browser/context-key-service";
// import { IconThemeService } from "@theia/core/lib/browser/icon-theme-service";
// import { TabBarDecoratorService } from "@theia/core/lib/browser/shell/tab-bar-decorator";
// import {
//   TabBarToolbar,
//   TabBarToolbarContribution,
//   TabBarToolbarFactory,
//   TabBarToolbarRegistry,
// } from "@theia/core/lib/browser/shell/tab-bar-toolbar";
describe("TheiaWidgetWidget", () => {
  let widget: TheiaWidgetWidget;

  beforeEach(async () => {
    const module = new ContainerModule((bind) => {
      // bind(ILogger).to(MockLogger);
      // bind(SplitPositionHandler).toSelf().inSingletonScope();
      // bind(SidePanelHandlerFactory).toAutoFactory(SidePanelHandler);
      // bind(FrontendApplicationStateService).toSelf().inSingletonScope();
      // bind(LabelParser).toSelf().inSingletonScope();
      // bind(EditorManager).toSelf().inSingletonScope();
      // bind(ApplicationShell).toSelf().inSingletonScope();
      // bind(StatusBarImpl).toSelf().inSingletonScope();
      // bind(StatusBar).toService(StatusBarImpl);
      // bind(CommandService).toService(CommandRegistry);
      // bindPreferenceService(bind);
      // bind(ContextKeyService).toSelf().inSingletonScope();
      // bind(CorePreferences).toConstantValue(<CorePreferences>{});
      // bind(WidgetManager).toSelf().inSingletonScope();
      // bindContributionProvider(bind, WidgetFactory);
      // bind(CommandRegistry).toSelf().inSingletonScope();
      // bindContributionProvider(bind, CommandContribution);
      // bind(DockPanelRendererFactory).toFactory(
      //   (context) => () => context.container.get(DockPanelRenderer)
      // );
      // bind(DockPanelRenderer).toSelf();
      // bindContributionProvider(bind, TabBarToolbarContribution);
      // bind(TabBarToolbarRegistry).toSelf().inSingletonScope();
      // bind(TabBarToolbarFactory).toFactory((context) => () => {
      //   const container = context.container.createChild();
      //   container.bind(TabBarToolbar).toSelf().inSingletonScope();
      //   return container.get(TabBarToolbar);
      // });
      // bind(TabBarRendererFactory).toFactory((context) => () => {
      //   const contextMenuRenderer =
      //     context.container.get<ContextMenuRenderer>(ContextMenuRenderer);
      //   const decoratorService = context.container.get<TabBarDecoratorService>(
      //     TabBarDecoratorService
      //   );
      //   const iconThemeService =
      //     context.container.get<IconThemeService>(IconThemeService);
      //   return new TabBarRenderer(
      //     contextMenuRenderer,
      //     decoratorService,
      //     iconThemeService
      //   );
      // });
      // bind(BreadcrumbsRendererFactory).toFactory((ctx) => () => {
      //   const childContainer = ctx.container.createChild();
      //   childContainer
      //     .bind(BreadcrumbRenderer)
      //     .to(DefaultBreadcrumbRenderer)
      //     .inSingletonScope();
      //   return childContainer.get(BreadcrumbsRenderer);
      // });

      bind(MessageService).toConstantValue({
        info(message: string): void {
          console.log(message);
        },
      } as MessageService);
      bind(TheiaWidgetWidget).toSelf();
    });
    const container = new Container();
    container.load(module);
    widget = container.resolve<TheiaWidgetWidget>(TheiaWidgetWidget);
  });

  it("should render react node correctly", async () => {
    const element = render(widget.render());
    expect(element.queryByText("Display Message")).toBeTruthy();
  });

  it("should inject 'MessageService'", () => {
    const spy = jest.spyOn(widget as any, "displayMessage");
    widget["displayMessage"]();
    expect(spy).toBeCalled();
  });
});
