import { NavigationNode } from "./menu-item.model";

export const MENU: NavigationNode[] =
  [
    {
      "url": "docs",
      "title": "Introduction"
    },
    {
      "title": "State",
      "children": [
        {
          "title": "@ngrx/store",
          "children": [
            {
              "title": "Why use Store?",
              "url": "guide/store/why"
            },
            {
              "title": "Getting Started",
              "url": "guide/store"
            },
            {
              "title": "Walkthrough",
              "url": "guide/store/walkthrough"
            },
            {
              "title": "Installation",
              "url": "guide/store/install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Actions",
                  "url": "guide/store/actions"
                },
                {
                  "title": "Reducers",
                  "url": "guide/store/reducers"
                },
                {
                  "title": "Selectors",
                  "url": "guide/store/selectors"
                }
              ]
            },
            {
              "title": "Advanced",
              "children": [
                {
                  "title": "Meta-Reducers",
                  "url": "guide/store/metareducers"
                },
                {
                  "title": "Feature Creators",
                  "url": "guide/store/feature-creators"
                },
                {
                  "title": "Action Groups",
                  "url": "guide/store/action-groups"
                }
              ]
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Injecting Reducers",
                  "url": "guide/store/recipes/injecting"
                },
                {
                  "title": "Downgrade for AngularJS",
                  "url": "guide/store/recipes/downgrade"
                }
              ]
            },
            {
              "title": "Configuration",
              "children": [
                {
                  "title": "Runtime checks",
                  "url": "guide/store/configuration/runtime-checks"
                }
              ]
            },
            {
              "title": "Testing",
              "url": "guide/store/testing"
            }
          ]
        },
        {
          "title": "@ngrx/effects",
          "children": [
            {
              "title": "Overview",
              "url": "guide/effects"
            },
            {
              "title": "Installation",
              "url": "guide/effects/install"
            },
            {
              "title": "Testing",
              "url": "guide/effects/testing"
            },
            {
              "title": "Lifecycle",
              "url": "guide/effects/lifecycle"
            },
            {
              "title": "Operators",
              "url": "guide/effects/operators"
            }
          ]
        },
        {
          "title": "@ngrx/router-store",
          "children": [
            {
              "title": "Overview",
              "url": "guide/router-store"
            },
            {
              "title": "Installation",
              "url": "guide/router-store/install"
            },
            {
              "title": "Actions",
              "url": "guide/router-store/actions"
            },
            {
              "title": "Selectors",
              "url": "guide/router-store/selectors"
            },
            {
              "title": "Configuration",
              "url": "guide/router-store/configuration"
            }
          ]
        },
        {
          "title": "@ngrx/entity",
          "children": [
            {
              "title": "Overview",
              "url": "guide/entity"
            },
            {
              "title": "Installation",
              "url": "guide/entity/install"
            },
            {
              "title": "Entity Interfaces",
              "url": "guide/entity/interfaces"
            },
            {
              "title": "Entity Adapter",
              "url": "guide/entity/adapter"
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Additional State Properties",
                  "url": "guide/entity/recipes/additional-state-properties"
                },
                {
                  "title": "Entity Adapter with Feature Creator",
                  "url": "guide/entity/recipes/entity-adapter-with-feature-creator"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/component-store",
          "children": [
            {
              "title": "Overview",
              "url": "guide/component-store"
            },
            {
              "title": "Installation",
              "url": "guide/component-store/install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Initialization",
                  "url": "guide/component-store/initialization"
                },
                {
                  "title": "Read",
                  "url": "guide/component-store/read"
                },
                {
                  "title": "Write",
                  "url": "guide/component-store/write"
                },
                {
                  "title": "Effects",
                  "url": "guide/component-store/effect"
                }
              ]
            },
            {
              "title": "Lifecycle",
              "url": "guide/component-store/lifecycle"
            },
            {
              "title": "ComponentStore vs Store",
              "url": "guide/component-store/comparison"
            },
            {
              "title": "Usage",
              "url": "guide/component-store/usage"
            }
          ]
        }
      ]
    },
    {
      "title": "Data",
      "children": [
        {
          "title": "@ngrx/data",
          "children": [
            {
              "title": "Overview",
              "url": "guide/data"
            },
            {
              "title": "Installation",
              "url": "guide/data/install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Overview",
                  "url": "guide/data/architecture-overview"
                },
                {
                  "title": "Entity Metadata",
                  "url": "guide/data/entity-metadata"
                },
                {
                  "title": "Entity Actions",
                  "url": "guide/data/entity-actions"
                },
                {
                  "title": "Entity Collection",
                  "url": "guide/data/entity-collection"
                },
                {
                  "title": "Entity Collection Service",
                  "url": "guide/data/entity-collection-service"
                },
                {
                  "title": "Entity Dataservice",
                  "url": "guide/data/entity-dataservice"
                },
                {
                  "title": "Entity Effects",
                  "url": "guide/data/entity-effects"
                },
                {
                  "title": "Entity Reducer",
                  "url": "guide/data/entity-reducer"
                },
                {
                  "title": "Entity Services",
                  "url": "guide/data/entity-services"
                }
              ]
            },
            {
              "title": "Advanced",
              "children": [
                {
                  "title": "Save Multiple Entities",
                  "url": "guide/data/save-entities"
                },
                {
                  "title": "Entity Change Tracking",
                  "url": "guide/data/entity-change-tracker"
                },
                {
                  "title": "Extension Points",
                  "url": "guide/data/extension-points"
                }
              ]
            },
            {
              "title": "FAQ",
              "url": "guide/data/faq"
            },
            {
              "title": "Limitations",
              "url": "guide/data/limitations"
            }
          ]
        }
      ]
    },
    {
      "title": "View",
      "children": [
        {
          "title": "@ngrx/component",
          "children": [
            {
              "title": "Overview",
              "url": "guide/component"
            },
            {
              "title": "Installation",
              "url": "guide/component/install"
            },
            {
              "title": "Let Directive",
              "url": "guide/component/let"
            },
            {
              "title": "Push Pipe",
              "url": "guide/component/push"
            }
          ]
        }
      ]
    },
    {
      "title": "Developer Tools",
      "children": [
        {
          "title": "@ngrx/store-devtools",
          "children": [
            {
              "title": "Overview",
              "url": "guide/store-devtools"
            },
            {
              "title": "Installation",
              "url": "guide/store-devtools/install"
            },
            {
              "title": "Instrumentation",
              "url": "guide/store-devtools/config"
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Exclude from Production",
                  "url": "guide/store-devtools/recipes/exclude"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/schematics",
          "children": [
            {
              "title": "Overview",
              "url": "guide/schematics"
            },
            {
              "title": "Installation",
              "url": "guide/schematics/install"
            },
            {
              "title": "Schematics",
              "children": [
                {
                  "title": "Store",
                  "url": "guide/schematics/store"
                },
                {
                  "title": "Action",
                  "url": "guide/schematics/action"
                },
                {
                  "title": "Reducer",
                  "url": "guide/schematics/reducer"
                },
                {
                  "title": "Selector",
                  "url": "guide/schematics/selector"
                },
                {
                  "title": "Container",
                  "url": "guide/schematics/container"
                },
                {
                  "title": "Effect",
                  "url": "guide/schematics/effect"
                },
                {
                  "title": "Entity",
                  "url": "guide/schematics/entity"
                },
                {
                  "title": "Feature",
                  "url": "guide/schematics/feature"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/eslint-plugin",
          "children": [
            {
              "title": "Overview",
              "url": "guide/eslint-plugin"
            },
            {
              "title": "Installation",
              "url": "guide/eslint-plugin/install"
            }
          ]
        }
      ]
    },
    {
      "title": "Recipes",
      "children": [
        {
          "title": "Nightly Builds",
          "url": "guide/nightlies"
        }
      ]
    },
    {
      "title": "Migrations",
      "children": [
        {
          "title": "V16",
          "url": "guide/migration/v16"
        },
        {
          "title": "V15",
          "url": "guide/migration/v15"
        },
        {
          "title": "V14",
          "url": "guide/migration/v14"
        },
        {
          "title": "V13",
          "url": "guide/migration/v13"
        },
        {
          "title": "V12",
          "url": "guide/migration/v12"
        },
        {
          "title": "V11",
          "url": "guide/migration/v11"
        },
        {
          "title": "V10",
          "url": "guide/migration/v10"
        },
        {
          "title": "V9",
          "url": "guide/migration/v9"
        },
        {
          "title": "V8",
          "url": "guide/migration/v8"
        },
        {
          "title": "V7",
          "url": "guide/migration/v7"
        },
        {
          "title": "V4",
          "url": "guide/migration/v4"
        }
      ]
    },
    {
      "url": "api",
      "title": "API",
      "tooltip": "API Reference"
    },
    {
      "url": "contributing",
      "title": "Contributing",
      "tooltip": "Contributing"
    },
    {
      "url": "enterprise-support",
      "title": "Enterprise Support",
      "tooltip": "Enterprise Support"
    }
  ]
