import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "./Button";

storiesOf("Button", module).add("default", () => <Button>test </Button>);
storiesOf("Button", module).add("white", () => <Button theme="white">test </Button>);
storiesOf("Button", module).add("icon", () => <Button theme="icon">test </Button>);
