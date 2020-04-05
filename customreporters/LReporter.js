import WDIOReporter from ‘@wdio/reporter’;
export default class LReporter extends WDIOReporter {

    constructor(options: any) {
        options = Object.assign(options, { stdout: true });
        super(options);
    }
     onTestPass(test) {
            this.write(`Congratulations! Your test "${test.title}" passed 👏`)
        }

            onRunnerStart () { console.log('onRunnerStart')}
            onBeforeCommand () { console.log('onBeforeCommand') }
            onAfterCommand () { console.log('onAfterCommand') }
            onScreenshot () { console.log('onScreenshot') }
            onSuiteStart () { console.log('onSuiteStart') }
            onHookStart () { console.log('onHookStart') }
            onHookEnd () { console.log('onHookEnd') }
            onTestStart () { console.log('onTestStart') }
            onTestPass () { console.log('onTestPass') }
            onTestFail () { console.log('onTestFail') }
            onTestSkip () { console.log('onTestSkip') }
            onTestEnd () { console.log('onTestEnd') }
            onSuiteEnd () { console.log('onSuiteEnd') }
            onRunnerEnd () { console.log('onRunnerEnd') }
    public async onTestFail(test) {
        Object.assign(test,
          {screenshot: await browser.takeScreenshot()});
    }
    public async onRunnerEnd(runner) {
        const suites = this.suites;
        const testName= runner.specs[0];
        const specName = testName.substring(testName.lastIndexOf(‘\\’) + 1);
        const sessionId = runner.sessionId;
        const formattedSuites = [];
        let overallStatus = ‘passed’;
        for (const suiteKey of Object.keys(suites)) {
          // gathering data and formatting into objects and adding to formattedSuites array
          // if any of the tests fail, overallStatus is set to false
        }
        if (overallStatus === ‘failed’) {
            await this.sendDetails(formattedSuites[0]);
        }
    }
    private async sendDetails(details: any) {
        const options = {
          body: details,
          json: true,
          method: 'POST',
          url: 'http://service.com/api/endpoint',
        };
        await request(options).catch(() => {
          console.log('Could not add error to build');
        });
    }
}