import { Route } from 'react-keeper'
import Page from './Pageauditcontractdept';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/' >

            </Route>
        </div>)
};