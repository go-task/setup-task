// Copyright (c) 2019 ARDUINO SA
//
// The software is released under the GNU General Public License, which covers the main body
// of the arduino/setup-task code. The terms of this license can be found at:
// https://www.gnu.org/licenses/gpl-3.0.en.html
//
// You can be released from the requirements of the above licenses by purchasing
// a commercial license. Buying such a license is mandatory if you want to modify or
// otherwise use the software for commercial activities involving the Arduino
// software without disclosing the source code of your own applications. To purchase
// a commercial license, send an email to license@arduino.cc

import { getInput, setFailed } from "@actions/core";
import { getTask } from "./installer.js";

async function run() {
  try {
    const version = getInput("version", { required: true });
    const repoToken = getInput("repo-token");
    const maxRetries = parseInt(getInput("max-retries") || "3", 10);

    await getTask(version, repoToken, maxRetries);
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    } else {
      throw error;
    }
  }
}

run();
